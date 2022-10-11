const express = require ('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

const DB_URL = process.env.DB_URL

async function main() {
  await mongoose.connect(DB_URL, { useNewUrlParser: true })
  console.log('Connected to Mongoose!')
}

main().catch((err) => console.log(err))

app.use(express.json())

const userRouter = require('./routes/UserRoutes')
app.use('/user', userRouter)


app.listen(3000, () => console.log('Server started'))


