
const express=require("express");
const catSchema=require("../model/catSchema");
const catRoute=express.Router();

catRoute.get("/",(req,res)=>{
    catSchema.find((err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
})

module.exports=catRoute;