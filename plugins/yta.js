let limit = 80
let handler = async (m, { conn, usedPrefix }) => {
const caliph = require('caliph-api');
if (!text) return reply( `Example : ${prefix + command} https://youtube.com*****`)
data = await caliph.downloader.youtube.ytmp4(q)
var nme = `./media/vid/${Date.now()}.mp4`
 fs.writeFileSync(nme, await getBuffer(data.result))
 var ran = './media/aud/'+getRandom('.mp3')
 exec(`ffmpeg -i ${nme} ${ran}`, async (err) => {
 conn.sendMessage(m.chat, { audio: fs.readFileSync(ran), mimetype: 'audio/mp4', fileName: `${data.title}.mp3` }, { quoted: m })
fs.unlinkSync(nme)
fs.unlinkSync(ran)
 })
}

handler.help = ['mp3', 'v', ''].map(v => 'yt' + v + ` <url> <without message>`)
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)?$/i
handler.limit = true


module.exports = handler