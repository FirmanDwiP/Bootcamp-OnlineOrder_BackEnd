const { customer } = require("../models/index");

var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    try {
      const customers =  customer.findAll();
  
      res.json({
        status: true,
        message: "Successful",
        data: customers
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error
      });
    }
  });

module.exports = router;