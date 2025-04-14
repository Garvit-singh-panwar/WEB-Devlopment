// require and main functions
const express = require("express");
const app = express();
const path = require('path');
const port = 8080;
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const methodOverride = require('method-override');



// use or set fumnctions
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'));



// calling mongoose async main function
main()
    .then(() => {
        console.log("connection sucessful");

    })
    .catch((err) => {
        console.log(err);
    });


    


// asyn main function for mongoose 
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// create a chat 

// let chat1 = new Chat({
//     from: "neha",
//     to:"priya",
//     msg: "send me oyur exam Sheet",
//     created_at: new Date() , // it is a function in js which create random date data is in the UTC formate
// });


// chat1.save().then((res)=>{ //UTC
//     console.log(res);
// });

// listening to port connect to lohalhost
app.listen(port, () => {
    console.log("port is listening");
});


// when we get our get request
app.get("/", (req, res) => {
    res.send("connected sucessfully");
});

// index route
app.get("/chats", async(req,res)=>{
   let chats = await Chat.find();
    // console.log(chats);
    // res.send("working");
    res.render("index.ejs",{chats});
})


// new route 
app.get("/chats/new",(req,res)=>{

    res.render("new.ejs");
})

// create route
app.post("/chats" , (req,res)=> {
    let {from , to , msg} = req.body;
    let newChat = new Chat({
            from : from,
            to: to,
            msg: msg,
            created_at: new Date()
        
    });
    newChat.save().then(res => {
        console.log("chat was saved");
    }).catch(err=> {
        console.log(err);
    }) 
    res.redirect("/chats");
}) 

// Edit route
app.get("/chats/:id/edit", (req,res) => {
    let {id} = req.params;
    res.render("edit.ejs",{id});
})

// edit 
app.put("/chats/:id", async (req,res)=>{
    let {id} = req.params;
    let {msg} = req.body;
    await Chat.updateOne({_id: id },{ $set: {msg: msg } });
    res.redirect("/chats");   
})


// Delete route


app.delete("/chats/:id" , async(req,res)=>{
    let {id} = req.params;
    await Chat.deleteOne({_id: id});
    res.redirect("/chats");
});