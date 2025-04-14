const express = require('express');
const app = express();
const port = 8080;
const ExpressError = require('./ExpressError');


const checktoken = (req,res,next)=>{
    let {tokken} = req.query;
    if(tokken  === "giveaccess"){
        // res.send("welcome");
        next();
    }
    else{
        throw new ExpressError(404,"ACCESS DENIED!");
    }
};




app.get("/api",checktoken,(req,res){
   res.send("data") ;
});


app.get("/", (req,res)=>{
    res.send("hi i am root");
});

app.get('/random',(req,res)=>{
    res.send("This is a random page")
});

app.use((err,req,res,next)=>{
    let {status , message} = err;
    res.status(status).send(message);
})

app.use((req,res,next)=>{
    req.time = new Date(Date.now()).toString();
    console.log(req.method , req.hostname , req.pathname, req.time);
    return next();
});



app.listen(port , ()=>{
    console.log("connected to server");
})