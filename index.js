const express = require ('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
require('dotenv').config()

const DB_URL = process.env.DB_URL

async function main() {
  await mongoose.connect(DB_URL, { useNewUrlParser: true })
  console.log('Connected to Mongoose!')
}

main().catch((err) => console.log(err))

app.use(express.json())

app.use(morgan('dev'))

const adsRouter = require('./routes/AdsRoutes')
app.use('/ads', adsRouter)
const userRouter = require('./routes/UserRoutes')
app.use('/users', userRouter)
const ratingRouter = require('./routes/RatingRoutes')
app.use('/rating', ratingRouter)
const questionRouter = require('./routes/QuestionRoutes')
app.use('/question', questionRouter)
const answerRouter = require('./routes/AnswerRoutes')
app.use('/answer', answerRouter)

app.listen(3000, () => console.log('Server started'))


 