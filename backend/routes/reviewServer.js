const express =require('express') 
const {getAllReview,search,createReview,updateReview,deletReview}=require('../controller/reviewController.js')
const router=express.Router();
const User =require("../models/User")
const Tour =require("../models/Tour")

router.get('/',(req,res)=> {
    getAllReview().then((data)=>res.status(200).json(data)).catch((err)=>res.status(500).send("err found"))
})

router.get("/:id",(req,res)=>{
    search(req.params.id).then((data)=>res.status(200).json(data))
    .catch((err)=>res.status(500).send(err))
})


router.put("/:id",(req,res)=>{
    
    updateReview(req.params.id,req.body).then((data)=>res.status(200).json(data))
    
    .catch((err)=>res.status(500).send(err))
})

router.delete("/:id",(req,res)=>{
    deletReview(req.params.id).then((data)=>res.status(200).json(data))
    .catch((err)=>res.status(500).send(err))
})


router.post("/add/:productId",(req,res)=>{
    
       createReview(req.params.productId, req.body.username, req.body.reviewText, req.body.rating )
    
    .then(data => res.status(200).json(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

module.exports = router