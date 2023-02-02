const express = require("express");
require("dotenv").config();

const router = express.Router();
const User = require("../models/userModel");

router.get("/property", async (req, res) => {
  try {
    const userDetail = await User.find();

    if (userDetail.length) {
      res.status(200).send({ userData: userDetail });
      console.log(userDetail);
    } else {
      res.status(409).send("Unauthorized user");
    }
    console.log(userDetail);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
    console.log(err);
  }
});

module.exports = router;
