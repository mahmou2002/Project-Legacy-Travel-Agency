const express = require('express');
const cors =require('cors');
const port = 4000;
const app = express();
const tourRouter = require("../routes/toursServer")
const userRouter=require("../routes/userServer")
const bookRouter=require("../routes/bookServer")
const authRouter = require("../routes/authServer")
const revRouter = require("../routes/reviewServer")
app.use(cors());
app.use(express.json())


app.use("/Tour",tourRouter)
app.use("/User",userRouter)
app.use("/Book",bookRouter)
app.use("/Auth",authRouter)
app.use("/Rev",revRouter)

app.listen(port, ()=>{
    console.log(`listening on ${port}`);
    })