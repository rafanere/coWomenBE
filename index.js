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

/*const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Mongoose!'))
*/

app.use(express.json())

const userRouter = require('./routes/userRoute')
app.use('/user', userRouter)


app.listen(3000, () => console.log('Server started'))


