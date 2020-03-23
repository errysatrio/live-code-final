'use strict'
require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./routes/index')
const errorhandler = require('./middlewares/errorHandler')
const port = process.env.PORT ||3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use(router)
app.use(errorhandler)

app.listen(port, () => console.log('listening to port', port))