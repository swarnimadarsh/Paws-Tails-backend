const mongoose =require("mongoose");

const catSchema =new mongoose.Schema({
    "breed":{type:String},
    "age":{type:String},
    "place":{type:String},
    "gender":{type:String},
    "image":{type:String}
},{
    collection:"cat"
});

module.exports=mongoose.model("catSchema",catSchema);