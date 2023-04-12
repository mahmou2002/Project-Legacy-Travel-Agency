const mongoose = require('mongoose');
const mongoUri='mongodb://127.0.0.1/Travel';
mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }).then(()=>{console.log("book connected")}).catch(err=>console.log(err));
const Book=require("../models/Book")
const User=require("../models/User")
const Tour =require("../models/Tour")

const getAllBook =()=>{
  return Book.find({})
}


const search=(username)=>{
  return Book.find({username:username})
}


// const createBook=(user, tour,title, price, startDate, endDate)=> {
//   const book = new Book({
//     user: user._id,
//     tour:tour._id,
//     username: user.username,
//     title,
//     price,
//     startDate,
//     endDate
//   });
//   return book.save();
// }

//========================== book ======================
const createBook=(tourId, username, fullName, Phone, guestSize, bookAt)=>{
  const book = new Book({
    tourId,
    username,
    fullName,
    Phone,
    guestSize,
    bookAt
  });
  return book.save();
}

//==========================end book ===================





const updateBook=(id,data)=>{
  return Book.findOneAndUpdate({_id:id},data)
  }

const  deletBook = (id) => {
  return Book.findOneAndDelete({_id:id})
}




module.exports = {
  getAllBook,search,createBook,updateBook,deletBook
};


