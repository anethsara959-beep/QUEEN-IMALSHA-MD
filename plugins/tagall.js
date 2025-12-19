module.exports = {
  command: "tagall",
  desc: "Tag everyone in the group",
  category: "group",
  use: ".tagall",
  fromMe: true,
  filename: __filename,

  execute: async (sock, msg) => {
    const metadata = await sock.groupMetadata(msg.key.remoteJid);
    const participants = metadata.participants.map(p => p.id);
    const groupName = metadata.subject || "Group";
    const adminCount = metadata.participants.filter(p => p.admin).length;
    const user = msg.pushName || "User";
    const memberCount = participants.length;

    // List of emojis for mentions
    const emojis = ["🌺", "🌹", "🌟", "🌝", "🍒", "🍥", "🍷"];
    
    // Create mentions with alternating emojis
    const mentionsText = participants.map((id, index) => {
      const emoji = emojis[index % emojis.length];
      return `${emoji} @${id.split("@")[0]}`;
    }).join("\n");

    const caption = `
╭════════════☐
│ 𝚀𝚄𝙴𝙴𝙽 𝙸𝙼𝙰𝙻𝚂𝙷𝙰 - 𝙶𝚁𝙾𝚄𝙿 𝚃𝙰𝙶𝙶𝙴𝚁📢  
│  
│  🏷️ ɢʀᴏᴜᴘ : ${groupName}
│  👑 ᴀᴅᴍɪɴ : ${adminCount}
│  👤 ᴜꜱᴇʀ: ${user}
│  👥 ᴍᴇᴍʙᴇʀꜱ : ${memberCount}
│  
│  📨 ᴍᴇꜱꜱᴀɢᴇ:  
╰════════════☐
> *𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝚂𝙸𝙻𝙰 𝙼𝙳*
${mentionsText}
  
> *𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝙸𝙼𝙰𝙻𝚂𝙷𝙰*`;

    await sock.sendMessage(msg.key.remoteJid, {
      image: { url: "'https://files.catbox.moe/letvwf.jpg" },
      caption: caption,
      mentions: participants
    }, { quoted: msg });
  }
};
        
