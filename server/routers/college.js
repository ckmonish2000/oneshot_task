const express=require("express");
let router=express.Router();
let CollegeModel=require("../model/Model")

router.get("/",(req,res)=>{
    res.send("welcome to college dashboard")
})



router.post("/createcollege",(req,res)=>{
    let body=req.body;
    let create=new CollegeModel({
        name:body.college_name,
        yearFounded:body.date,
        city:body.city,
        state:body.state,
        country:body.country,
        No_Of_Students:body.No_Of_Students,
        courses:body.courses
    })

    create.save()
    .then(data=>res.status(200).json(data))
    .catch(err=>{res.send(err)})
})

module.exports=router