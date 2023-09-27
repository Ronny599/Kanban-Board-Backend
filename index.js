// const User= require('./models/User');
const connectToDB= require('./db');

 connectToDB();
const express = require('express');
const app = express();
const port = 3010;
const path = require('path');


// Use of Middleware
// app.use(express.json); 

// API from routes
// app.use('/api/auth', require('./routes/auth'));
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  console.log("My First Connection");
});
