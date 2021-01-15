const express=require("express");
let router=express.Router();
let CollegeModel=require("../model/Model");
let StudentModel=require("../model/studentModel");



// post
router.post("/createstudent",(req,res)=>{
    let body=req.body;
    let create=new StudentModel({
        name:body.name,
        batchYear:body.batchYear,
        college_id:body.college_id,
        skills:body.skills
        })
    create.save()
    .then(data=>{res.status(200).json(data)})
    .catch(err=>{res.json(err)})
    })

//get 
router.get("/",(req,res)=>{
   StudentModel.find({})
    .then(data=>res.status(200).json(data))
    .catch(err=>res.status(200).json(err))
})





module.exports=router;