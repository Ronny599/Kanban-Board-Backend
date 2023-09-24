const express= require('express');
const router= express.Router();

router.get('/', (req, res) => {
  // obj = {
  //   a:"Gojo Satoru",
  //   pos: "The Honored One"
  // }
  // res.json(obj)
  console.log(req.body);
  res.send("Hello");
});

module.exports = router