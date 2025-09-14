const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        requires:true,
        trim:true,
    },
    email:{
        type:String,
        requires:true,
        trim:true,
        validate:{
            validator:(value)=>{
                const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                return value.match(re);
            },
            message:"Please enter a valid email"
        }
    },
    password:{
        type:String,
        requires:true,
    },address:{
        type:String,
        default:"",
    },type:{
        type:String,
        default:"user",
    }
})

const User = mongoose.model("User",userSchema);
module.exports = User;