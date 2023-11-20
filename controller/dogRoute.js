
const express=require("express");
const dogSchema=require("../model/dogSchema");
const dogRoute=express.Router();

dogRoute.get("/",(req,res)=>{
    dogSchema.find((err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
})

module.exports=dogRoute;