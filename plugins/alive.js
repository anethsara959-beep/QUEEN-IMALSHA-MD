module.exports = {
  command: "alive",
  description: "Check if bot is running",
  category: "info",

  async execute(sock, msg) {
    try {
      const jid = msg.key.remoteJid;
      const sender = msg.key.participant || msg.key.remoteJid;
      const jidName = sender.split("@")[0];

      const date = new Date().toLocaleDateString();
      const time = new Date().toLocaleTimeString();
      const speed = Math.floor(Math.random() * 90 + 10);

      const caption = `*🛸𝚀𝚄𝙴𝙴𝙽 𝙸𝙼𝙰𝙻𝚂𝙷𝙰 𝙰𝙻𝙸𝚅𝙴*
      *𝚀𝚄𝙴𝙴𝙽 𝙸𝙼𝙰𝙻𝚂𝙷𝙰 𝙼𝙳🛸𝙰𝙻𝙸𝚅𝙴 වෙතට සාදරයෙන් පිලිගන්නවා ඔබව📢*
      *𝚀𝚄𝙴𝙴𝙽 𝙸𝙼𝙰𝙻𝚂𝙷𝙰 𝙼𝙳 𝙾𝚆𝙽𝙴𝚁 𝙱𝚈 𝚂𝙰𝙽𝚄 𝚇*
      
      *🔌OWNER INFO🔌*
94772563976/QUEEN IMALSHA/

*📢SUPPORT CHANNEL*
https://whatsapp.com/channel/0029VbC2V7k3QxS4uRS8cB1P

*👥SUPPORT GROUP*
https://chat.whatsapp.com/JvogBqBXhp94rVjFMxDQRi?mode=hqrt1
`;

      // Envoyer simplement le message avec l'image
      await sock.sendMessage(
        jid,
        {
          image: { url: 'https://files.catbox.moe/letvwf.jpg' },
          caption: caption
        },
        { quoted: msg }
      );

    } catch (err) {
      console.error("❌ Error in alive command:", err);
      await sock.sendMessage(msg.key.remoteJid, {
        text: "❌ Error checking bot status",
      });
    }
  },
};
