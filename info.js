let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: BOCAH GAMERS97

║

╠➥ Instagram: @BocahGamers97
╠➥ YouTube: BOCAH GAMERS97
║
╠═〘 Thanks To 〙 ═
╠➥ ꧁𓊈𒆜𝓟𝓻𝓸AtheeqBø$$𒆜𓊉꧂



║
╠═〘 DONASI 〙 ═

╠➥ Tsel: +62853-6683-4566

║
║>Request? Wa.me/+62853-6683-4566
║
╠═〘 NfQ BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

