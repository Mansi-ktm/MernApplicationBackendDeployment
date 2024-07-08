const express = require("express");
const mongoose = require("mongoose");
const studentRoute = require("./controller/studentRoute");

const bodyParser = require("body-parser");
const cors = require("cors")

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://projectcurd:12345@cluster0.whbtp8w.mongodb.net/schooldb");
var db=mongoose.connection;

db.on("open",()=> console.log("connected"));
db.on("error",()=> console.log("not connected"));

app.use("/studentRoute",studentRoute);

app.listen(4000,()=>{
    console.log("Server is running in port 4000");
})