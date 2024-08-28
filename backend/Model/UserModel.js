const mongoose =require("mongoose");
const Schema =mongoose.Schema;

const userSchema =new Schema({
    name:{
        type:String,//type:string
        required:true,//validate
    },

    gmail:{
        type:String,//type:string
        required:true,//validate
    },

    age:{
        type:Number,//type:string
        required:true,//validate
    },

    address:{
        type:String,//type:string
        required:true,//validate
    }
});

module.exports= mongoose.model(
    "UserModel",//file name
    userSchema //function name
)