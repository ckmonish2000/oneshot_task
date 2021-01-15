const mongoose=require("mongoose");


// college


const college=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    yearFounded:String,
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    No_Of_Students:{
        type:Number,
        required:true
    },
    courses:[]
})


module.exports=mongoose.model("Colleges",college)