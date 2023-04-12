const bcrypt =require ( "bcryptjs")
const jwt =require ( "jsonwebtoken")

const express = require('express') 
const router=express.Router();
const {register, login} = require ("../controller/authController.js")



router.post('/register',(req,res)=> {

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)

    register(req.body.username, req.body.email, hash, req.body.photo)
    .then((data)=>res.status(200).json(data))
    .catch((err)=>res.status(500).send(err))
})

router.post('/login', (req, res)=>{
    let responseSent = false;

    login(req.body.email, req.body.password)
    .then((user) => {
        if (!user) {
            responseSent = true;
            return res.status(500).send("User not found");
        }

        return new Promise((resolve, reject) => {
            bcrypt.compare(req.body.password, user.password, (error, isMatch) => {
                if (error) {
                    reject(error);
                }
                else if (!isMatch) {
                    reject("Invalid password");
                }
                else {
                    resolve(user);
                }
            });
        });
    })
    .then((user) => {
        const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "1h" });

        if (!responseSent) {
            res.json({ token: token });
        }
    })
    .catch((error) => {
        if (!responseSent) {
            res.status(401).send(error);
        }
    });
});





module.exports = router
