const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static(path.join(__dirname,"/public")));

app.listen(port,()=>{
    console.log("connection built");
});

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));
app.get("/",(req,res)=>{


res.render("home.ejs");
});

app.use(express.static("public"));

const instaData = require("./data.json");

app.get("/:username",(req,res)=>{
    let { username } = req.params;
    const data = instaData[username];
    console.log(data);
    res.render("instagram.ejs",{data});
     });


     

