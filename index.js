const {telegrammBot} = require('./telegraf')

const start = async () => {
	try {
		await telegrammBot()
	}catch (e) {
		console.log(e)
	}
}

start()

