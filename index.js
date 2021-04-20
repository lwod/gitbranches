const {telegramBot} = require('./telegraf')

//d

const start = async () => {
	try {
		
		await telegramBot()
		
	}catch (e) {
		console.log(e)
	}
}

start()

