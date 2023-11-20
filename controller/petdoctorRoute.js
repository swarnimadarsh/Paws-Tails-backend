const express=require("express");
const petdoctorSchema=require("../model/petdoctorSchema");
const petdoctorRoute=express.Router();
const mongoose = require("mongoose");

petdoctorRoute.post("/create-appoinment",(req,res)=>{
    petdoctorSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

petdoctorRoute.get("/",(req,res)=>{
    petdoctorSchema.find((err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
})


petdoctorRoute.route("/update/:id")
.get((req,res)=>{
    petdoctorSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
}).put((req,res)=>{
    petdoctorSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set:req.body},
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})


petdoctorRoute.delete("/delete/:id",(req,res)=>{
    petdoctorSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err){
            return err;
        }
        else
        {
            res.json(data);
        }
    })
})


module.exports=petdoctorRoute;