const express= require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app=express()
const port = 3033
require('dotenv').config()
const router = require('./config/routes')
const configureDb = require('./config/database')
configureDb()
app.use(cors())
app.use(express.json())
app.use(router)

app.listen(port,()=>{
    console.log('server is running on port',port)
}) 