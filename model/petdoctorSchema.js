const mongoose =require("mongoose");

const petdoctorSchema =new mongoose.Schema({
    "petname":{type:String},
    "pettype":{type:String},
    "appoinmentdate":{type:String},
    "appoinmenttime":{type:String},
    
},{
    collection:"petdoctor"
});

module.exports=mongoose.model("petdoctorSchema",petdoctorSchema);