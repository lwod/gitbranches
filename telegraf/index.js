const telegramBot = async () => {
	const {Telegraf} = require('telegraf')
	const bot = new Telegraf('1731955345:AAEDHwmwRUqvfANyJaN_M_u84nt4eSYaMjo')
	bot.start((ctx) => ctx.reply('github-action started'))

	bot.command('test', (ctx) => {
		const today = new Date();
		const dd = String(today.getDate()).padStart(2, '0');
		const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		const yyyy = today.getFullYear();
		
		const data =  mm + '/' + dd + '/' + yyyy;
		ctx.reply(`test on: ${data}`)
	})

	bot.command('stop', (ctx) => {
		ctx.reply('stopped')
		bot.stop()
	})
	bot.launch()
}

module.exports = {
	telegramBot
}

