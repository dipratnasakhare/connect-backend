const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
require("dotenv").config()

const connectDB = async() => {
  try {
    const  connect =await mongoose.connect(process.env.mongoURL)
    console.log(`MongoDB Connected: ${connect.connection.host}`)
  } catch (error) {
    console.log(`Error connecting to MongoDB: ${error.message}`)
    process.exit()
  }
}

module.exports = connectDB

// ,{
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }