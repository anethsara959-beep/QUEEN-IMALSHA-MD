const { formatMessage } = require('../lib/formatter');
const os = require('os');
const moment = require('moment');


module.exports = {
        command: 'system',
        description: 'Show the system',
        execute: async (socket, msg, args, number) => {
            const uptime = process.uptime();
            const formattedUptime = moment.utc(uptime * 1000).format("HH:mm:ss");

            const memoryUsage = process.memoryUsage();
            const usedMemory = (memoryUsage.rss / 1024 / 1024).toFixed(2);
            const totalMem = (os.totalmem() / 1024 / 1024).toFixed(2);
            const freeMem = (os.freemem() / 1024 / 1024).toFixed(2);
            const cpuInfo = os.cpus()[0].model;

            const caption = `*⚙️𝙼𝙸𝙽𝙸 𝙱𝙾𝚃 𝚂𝚈𝚂𝚃𝙴𝙼⚙️*
*╭═══════════☐*
*│ ◆ 𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼 :❯ ${os.platform()}*
*│ ◆ 𝚄𝙿𝚃𝙸𝙼𝙴 :❯ ${formattedUptime}*
*│ ◆ 𝚁𝙰𝙼 :❯ ${usedMemory}*
*│ ◆ 𝙼𝙴𝙼𝙾𝚁𝚈 :❯ ${freeMem}*
*╰═══════════☐*
 *𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝙸𝙼𝙰𝙻𝚂𝙷𝙰*`
            

            const sender = msg.key.remoteJid;

            await socket.sendMessage(sender, {
                image: { url: 'https://files.catbox.moe/letvwf.jpg' }, // Your bot image
                caption,
                contextInfo: {
                    mentionedJid: ['94772563976@s.whatsapp.net'], // Your number
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363282833839832@newsletter', // Your newsletter JID
                        newsletterName: 'QUEEN IMALSHA TECH',
                        serverMessageId: 143
                    }
                }
            })
        }
}