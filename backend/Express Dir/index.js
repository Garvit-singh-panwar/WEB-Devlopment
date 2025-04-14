const express = require("express");
const app = express();

// console.dir(app);

let port = 8080;

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

// app.use((req,res)=>{
//     console.log("request recived");
// });


app.get("/",(req,res)=>{
    console.log(req.params);
    res.send("hello,i am root");
});
// app.get("/:username/:id" , (req,res)=>{
//     let {username , id} = req.params;
//     res.send(`welhome to the page of @ ${username} , id = ${id}`);
// });
app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send("no results");
})