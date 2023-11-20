const mongoose =require("mongoose");

const adoptionSchema =new mongoose.Schema({
    "pet":{type:String},
    "breed":{type:String},
    "age":{type:String},
    "place":{type:String},
    "gender":{type:String},
    "email":{type:String},
    "number":{type:Number}
    
},{
    collection:"adoption"
});

module.exports=mongoose.model("adoptionSchema",adoptionSchema);