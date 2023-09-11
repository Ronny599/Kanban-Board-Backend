const mongoose = require('mongoose');

const URL= "mongodb+srv://Ronny599:Ronit@123@kanban-board.kbuvxz2.mongodb.net/?retryWrites=true&w=majority";

const connectToDB =() =>{
  mongoose.connect(URL,()=>{
    console.log("Connected To Database Successfully");
  })
}

module.exports= connectToDB;