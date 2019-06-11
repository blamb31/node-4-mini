const express = require('express')
const app = express()

require('dotenv').config()
const msgCtrl = require('./messagesCtrl')

const {SERVER_PORT} = process.env

app.use(express.json())

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))

app.get('/api/messages', msgCtrl.getAllMessages)
app.post('/api/messages', msgCtrl.createMessage)

