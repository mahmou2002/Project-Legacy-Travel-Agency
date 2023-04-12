const express =require('express') 
const {getAllUser,search,createUser,updateUser,deletUser}=require('../controller/userController')
const router=express.Router();

router.get('/',(req,res)=> {
    getAllUser().then((data)=>res.status(200).json(data)).catch((err)=>res.status(500).send("err found"))
})

router.get("/:username",(req,res)=>{
    search(req.params.username).then((data)=>res.status(200).json(data))
    .catch((err)=>res.status(500).send(err))
})


router.put("/:id",(req,res)=>{
    
    updateUser(req.params.id,req.body).then((data)=>res.status(200).json(data))
    
    .catch((err)=>res.status(500).send(err))
})

router.delete("/:id",(req,res)=>{
    deletUser(req.params.id).then((data)=>res.status(200).json(data))
    .catch((err)=>res.status(500).send(err))
})

router.post("/add",(req,res)=>{
    createUser(req.body).then((data)=>res.status(200).json(data))
    .catch((err)=>res.status(500).send(err))
})


module.exports = router
