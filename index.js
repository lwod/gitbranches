const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')

app.get('/', async (req,res)=>{
	res.json({message:'express'})
})

app.listen(port, ()=>{
	console.log('server on port:', port)
})
