const mongoose = require('mongoose');
const mongoUri='mongodb://127.0.0.1/Travel';
mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }).then(()=>{console.log("user connected")}).catch(err=>console.log(err));
const User=require("../models/User.js")

const getAllUser =()=>{
  return User.find({})
}


const search=(username)=>{
  return User.find({username:username})
}

const createUser = (data) => {
  return User.create(data)
}

const updateUser=(id,data)=>{
  return User.findOneAndUpdate({_id:id},data)
  }

const  deletUser = (id) => {
  return User.findOneAndDelete({_id:id})
}




module.exports = {
  getAllUser,search,createUser,updateUser,deletUser
};