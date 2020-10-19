const serverless = require('serverless-http')
import express from 'express'
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})
const handler = serverless(app);

export  {app, handler}

