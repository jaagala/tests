const express = require("express");
const router = express.Router();
const {Order} = require("./order.model.js");
//const mongoose = require("mongoose");

router.get("/", async (req, res)=>{
  const xs = await Order.find({});
  res.send(xs);
});

router.post("/", (req, res) => {
  const props = {
    fullName: req.body.fullName,
    burger: req.body.burger,
    drink: req.body.drink
  };
  const order = new Order(props);
  order.save(err => {
    if (err) {
      console.log("Error: ", err);
      res.send(500);
      return;
    }
    console.log("Success create!");
    res.send(201);
  });
});

router.get("/search", (req, res) => {
  console.log(req.query);
  Order.find({}, function(err, Order) {
    if(err) {
      console.log("Error :", err);
      return;
    }
    res.send(Order);
  });
  res.send(200);
});



module.exports = router;

