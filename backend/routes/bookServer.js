const express =require('express') 
const {getAllBook,search,createBook,updateBook,deletBook}=require('../controller/bookController')
const router=express.Router();
const User =require("../models/User")
const Tour =require("../models/Tour")
router.get('/',(req,res)=> {
    getAllBook().then((data)=>res.status(200).json(data)).catch((err)=>res.status(500).send("err found"))
})

router.get("/:username",(req,res)=>{
    search(req.params.username).then((data)=>res.status(200).json(data))
    .catch((err)=>res.status(500).send(err))
})


router.put("/:id",(req,res)=>{
    
    updateBook(req.params.id,req.body).then((data)=>res.status(200).json(data))
    
    .catch((err)=>res.status(500).send(err))
})

router.delete("/:id",(req,res)=>{
    deletBook(req.params.id).then((data)=>res.status(200).json(data))
    .catch((err)=>res.status(500).send(err))
})


router.post("/add",(req,res)=>{

    createBook(req.body.tourId, req.body.username, req.body.fullName, req.body.Phone, req.body.guestSize, req.body.bookAt).then(data => res.status(200).json(data))
    .catch(err => {
      res.status(500).send(err)
    });
});

module.exports = router
