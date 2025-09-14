const express = require("express");
const User = require("../models/users");
const app = express();

const authRouter = express.Router();

authRouter.post("/api/signup",async(req,res)=>{
    const {name,email,password} = req.body;
    const existingUser = await User.findOne({email},(err,user)=>{});
    if(existingUser){
        return res.status(400).json({msg:"User with same mail already exists!"});
    }


});
module.exports = authRouter;