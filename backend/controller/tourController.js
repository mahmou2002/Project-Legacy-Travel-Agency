// const mongoose = require('mongoose');
// const mongoUri='mongodb://127.0.0.1/Travel';
// mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }).then(()=>{console.log("tour connected")}).catch(err=>console.log(err));
// const Tour=require("../models/Tour")

// const getAllTour =()=>{
//   return Tour.find({})
// }


// const search=(title)=>{
//   return Tour.find({title:title})
// }

// const createTour = (data) => {
//   return Tour.create(data)
// }

// const updateTour=(id,data)=>{
//   return Tour.findOneAndUpdate({_id:id},data)
//   }

// const  deletTour = (id) => {
//   return Tour.findOneAndDelete({_id:id})
// }



// const addReviewToTour = (tourId, review) => {
  
//   return Tour.findOneAndUpdate(
//     {_id: tourId },{ $push: { reviews: review }},{ new: true }
//   );
// };




// module.exports = {
//   getAllTour,search,createTour,updateTour,deletTour,addReviewToTour
// };


const mongoose = require('mongoose');
const mongoUri='mongodb://127.0.0.1/Travel';
mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }).then(()=>{console.log("tour connected")}).catch(err=>console.log(err));
const Tour=require("../models/Tour")

const getAllTour =()=>{
  return Tour.find({})
}


const search=(title)=>{
  return Tour.find({title:title})
}

const createTour = (data) => {
  return Tour.create(data)
}

const updateTour=(id,data)=>{
  return Tour.findOneAndUpdate({_id:id},data)
  }

const  deletTour = (id) => {
  return Tour.findOneAndDelete({_id:id})
}





const addReviewToTour = (id, data) => {
  return Tour.findByIdAndUpdate(id,{$push: { reviews: data },},{ new: true }
  );
};



module.exports = {
  getAllTour,search,createTour,updateTour,deletTour,addReviewToTour
};