const mongoose =require("mongoose");

const dogSchema =new mongoose.Schema({
    "breed":{type:String},
    "age":{type:String},
    "place":{type:String},
    "gender":{type:String},
    "image":{type:String}
},{
    collection:"dog"
});

module.exports=mongoose.model("dogSchema",dogSchema);