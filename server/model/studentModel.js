const mongoose=require("mongoose");




const students=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
   batchYear:{
    type:Number,
    required:true
    },
   college_id:{
    type:String,
    required:true
    },
   skills:[]
})


module.exports=mongoose.model("Students",students)