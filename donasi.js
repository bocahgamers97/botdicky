let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ 
│ • Telkomsel +62853-6683-4566
 |
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/+62853-6683-4566
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
