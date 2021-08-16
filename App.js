const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose
  .connect(
    `mongodb+srv://soujanya:wuViugSjMvEDoA9u@authslate.ifzaw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((con) => {
    console.log('Connected to DB')
  })
  .catch((err) => {
    console.log('Error', err)
  })

var db = mongoose.connection
var Schema = mongoose.Schema
var userSchema = new Schema(
  {
    name: String,
    phone: String,

    email: String,
    password: String,
  },
  { collection: 'users' }
)
var user = mongoose.model('user', userSchema)

const userList = async (req, resp) => {
  let data = await user.findOne({ email: 'demo@gmail.com' })
  console.log(data)
  resp.json(data)
}
app.get('/', userList)
app.listen(3000, () => {
  console.log('app listening ')
})
