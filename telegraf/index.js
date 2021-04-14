const telegrammBot = async () => {
	const {Telegraf} = require('telegraf')
	const bot = new Telegraf('1731955345:AAEDHwmwRUqvfANyJaN_M_u84nt4eSYaMjo')
	bot.start((ctx) => ctx.reply('github-action started'))
	bot.command('stop', (ctx) => {
		ctx.reply('stopped')
		bot.stop()
	})
	bot.launch()
}

module.exports = {
	telegrammBot
}

