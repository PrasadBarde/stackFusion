const express = require("express");
const app = express();

const User = require("../models/userModel")

app.post('/addnewproperty', async (req, res) => {
    const data = await User.find()
    let ppid = -1;
    if (data.length === 0) ppid = 1
    else ppid = data[data.length - 1]._id + 1
    const newProperty = await User({
        _id: ppid,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        date: req.body.date,
    })
    newProperty.save().then((data) => {
        console.log('Property Added')
        res.json(data);
    }).catch(err => console.log(err.message));
});

module.exports = app