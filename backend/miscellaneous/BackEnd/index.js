const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(3000,()=>{
    console.log("connected to server");
});

app.get("/register",(req,res)=>{
const {username , password} = req.params;
res.send(`you send get request ! your name is ${username}`);
});

app.post("/register",(req,res)=>{
    const {user,password} = req.body;
    res.send(`you send post request ! your name is ${user}`);
});