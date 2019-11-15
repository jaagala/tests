const express = require("express");
const router = express.Router();
const {Order} = require("./order.model.js");
const mongoose = require("mongoose");

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

router.get("/", (req, res) => {
  Order.find({}, function (err, products) {
    if (err) {
      console.log("Error:", err);
      res.status(500).send(err);
      return;
    }
    res.send(products);
  });
});




module.exports = router;

