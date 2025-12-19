module.exports = {
  command: "ping",
  desc: "Check bot response time",
  category: "utility",
  use: ".ping",
  fromMe: false,
  filename: __filename,

  execute: async (sock, msg) => {
    const start = Date.now();
    await sock.sendMessage(msg.key.remoteJid, { text: "*𝙾𝚆𝙽𝙴𝚁 𝚂𝙰𝙽𝚄 𝚇*" });
    const latency = Date.now() - start;
    
    await sock.sendMessage(msg.key.remoteJid, { 
      text: `*𝚀𝚄𝙴𝙴𝙽 𝙸𝙼𝙰𝙻𝚂𝙷𝙰*` 
    }, { quoted: msg });
  }
};
