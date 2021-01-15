const express=require("express");
let router=express.Router();
let CollegeModel=require("../model/Model")





// post
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

// get

router.get("/",(req,res)=>{
    CollegeModel.find({})
    .then(data=>res.status(200).json(data))
    .catch(err=>res.status(200).json(err))
})

router.get("/getByname",(req,res)=>{
    let dta={}
    CollegeModel.find({name:req.body.collegeName})
    .then(data=>{
        dta["main"]=data
        // gets similar college
        CollegeModel.find({city:data[0].city,courses:data[0].courses,name:{$ne:req.body.collegeName}})
        .then(val=>{
            dta["similar"]=val;
            res.status(200).json(dta)
        })
        
    })
    .catch(err=>res.json(err))
    
})

router.get("/getByid",(req,res)=>{
    let dta={}
    CollegeModel.find({_id:req.body._id})
    .then(data=>{
       dta["main"]=data;
        // gets similar college
        CollegeModel.find({city:data[0].city,courses:data[0].courses,_id:{$ne:req.body._id}})
        .then(val=>{
            dta["similar"]=val;
            res.status(200).json(dta)
        })
    }
        )
    .catch(err=>res.json(err))
})





module.exports=router