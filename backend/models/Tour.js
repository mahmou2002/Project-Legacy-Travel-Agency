// const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;
// const tourSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     city: {
//       type: String,
//       required: true,
//     },
//     address: {
//       type: String,
//       required: true,
//     },
//     distance: {
//       type: Number,
//       required: true,
//     },
//     photo: {
//       type: String,
//       required: true,
//     },
//     desc: {
//       type: String,
//       required: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     maxGroupSize: {
//       type: Number,
//       required: true,
//     },

//     reviews: [
//       {
//         type: mongoose.Types.ObjectId,
//         ref: "Review",
//       },
//     ],
//     featured: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   { timestamps: true }
// )
// const Tour = mongoose.model("Tour", tourSchema);
// module.exports =  Tour

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    distance: {
      type: Number,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxGroupSize: {
      type: Number,
      required: true,
    },

    reviews: [
      {
        reviewText: { type: String },
        rating: { type: Number, min: 1, max: 5 },
        username: { type: String },
        date: { type: Date, default: Date.now }
      },
    ],

    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    reviews: { type: Array, default: [] },
  }
)
const Tour = mongoose.model("Tour", tourSchema);
module.exports =  Tour
