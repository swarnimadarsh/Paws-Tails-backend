const mongoose=require("mongoose");
const express=require("express");

const dogRoute=require("./controller/dogRoute");
const catRoute=require("./controller/catRoute");
const adoptionRoute=require("./controller/adoptionRoute");
const petdoctorRoute = require("./controller/petdoctorRoute");
const loginRoute = require("./controller/loginRoute");

const cors= require("cors");
const bodyParser= require("body-parser");


mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://test:12345@cluster0.mde8y0o.mongodb.net/petdb");

var db=mongoose.connection;
db.on("open",()=> console.log("connected to database"));
db.on("error",()=> console.log("error"));

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


app.use("/dogRoute",dogRoute);
app.use("/catRoute",catRoute);
app.use("/adoptionRoute",adoptionRoute);
app.use("/petdoctorRoute",petdoctorRoute);
app.use("/loginRoute",loginRoute);

app.listen(4000, ()=>{
    console.log("server started at 4000");
})