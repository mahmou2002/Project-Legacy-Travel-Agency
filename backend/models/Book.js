// const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;
// const bookSchema = new mongoose.Schema({
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'User',
//       required: true
//     },
//     tour: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Tour',
//       required: true
//     },
//     username:{
//       type:String,
//       required:true
//     },
//     title:{
//       type:String,
//       required:true
//     },
//     price:{
//       type:Number,
//       required:true
//     },

//     startDate: {
//       type: Date,
//       required: true
//     },
//     endDate: {
//       type: Date,
//       required: true
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now
//     }
//   });
//   const Book = mongoose.model("Book", bookSchema);
// module.exports = Book


const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const bookSchema = new mongoose.Schema({
  tourId: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  Phone: {
    type: String,
    required: true
  },
  guestSize: {
    type: Number,
    required: true
  },
  bookAt: {
    type: String,
    required: true
  }
});
const Book = mongoose.model("Book", bookSchema);
module.exports = Book


