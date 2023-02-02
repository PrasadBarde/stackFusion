const mongoose = require("mongoose");
// const validator = require("validator");

const userScemaSignup = new mongoose.Schema({
    _id: Number,
    name :{
        type: String,
        require : true
    },
    email :{
        type: String,
        require : true,

    },
    phone :{
        type: Number,
        require : true
    },
    date :{
        type: String,
        require : true
    }
    ,
});

const User = mongoose.model("user",userScemaSignup);
module.exports = User;