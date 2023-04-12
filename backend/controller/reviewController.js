const mongoose = require('mongoose');
const mongoUri='mongodb://127.0.0.1/Travel';
mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }).then(()=>{console.log("review connected")}).catch(err=>console.log(err));
const Review=require("../models/Review")
const User=require("../models/User")
const Tour =require("../models/Tour")
const getAllReview =()=>{
  return Review.find({})
}


const search=(id)=>{
  return Review.find({_id:id})
}


const createReview=(productId, username, reviewText, rating)=> {
  const newReview = new Review({
    productId: productId._id,
    username: username,
    reviewText: reviewText,
    rating: rating
  });
  return newReview.save();
}




const updateReview=(id,data)=>{
  return Review.findOneAndUpdate({_id:id},data)
  }

const  deletReview = (id) => {
  return Review.findOneAndDelete({_id:id})
}




module.exports = {
  getAllReview,search,createReview,updateReview,deletReview
};