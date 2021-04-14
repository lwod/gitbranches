const {telegramBot} = require('./telegraf')

const start = async () => {
	try {
		await telegramBot()
	}catch (e) {
		console.log(e)
	}
}

start()

