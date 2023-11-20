const express=require("express");
const adoptionSchema=require("../model/adoptionSchema");
const adoptionRoute=express.Router();

adoptionRoute.post("/create-adoption",(req,res)=>{
    adoptionSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

module.exports=adoptionRoute;