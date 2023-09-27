const mongoose = require('mongoose');

const url = "mongodb+srv://Ronny599:Ronit@123@kanban-board.kbuvxz2.mongodb.net/?retryWrites=true&w=majority";

// Ronit@123
const connectToDB =() =>{
  mongoose.connect("mongodb+srv://Ronny599:Ronit@123@kanban-board.kbuvxz2.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(()=>{
    console.log("Connected To Database Successfully");
    })
  .catch((err)=>{  
    console.log("Connection Lost!"+err);
  })
}



// const { MongoClient, ServerApiVersion } = require('mongodb');

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

module.exports= connectToDB;