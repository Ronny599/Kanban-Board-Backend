const mongoose = require('mongoose');

const uRI= "";
// Ronit@123
const connectToDB =() =>{
  mongoose.connect(uRI,()=>{
    console.log("Connected To Database Successfully");
  })
}

module.exports= connectToDB;