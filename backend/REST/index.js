const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4} = require("uuid");
uuidv4();
const methodOverride = require('method-override');




app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride(`_method`));

app.set("view engine" , "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        id : uuidv4(),
        username: "apnacollege" ,
        content: "I Love Coding"
    },

    {
        id : uuidv4(),
        username: "arpit bala" ,
        content: "Writing new songs"
    }
    ,
    {
        id : uuidv4(),
        username: "vivek samtani",
        content: "creating new show"
    }
];

app.listen(port , ()=>{
console.log(`sucessfully connected to port : ${port}`);
});

app.get("/posts",(req,res)=>{

    res.render("index.ejs",{ posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("newpost.ejs");
});

app.post("/posts",(req,res)=>{
    const {username  , content } = req.body;
    let id = uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((P)=>{
       return id === P.id;
    });

    res.render("seePost.ejs",{ post });
});

app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let newcontent = req.body.content;
    let post = posts.find((P)=>{
        return id === P.id;
     });
    post.content = newcontent;
    res.redirect("/posts");
    // console.log(id);
    // console.log( newcontent );
    // console.log(post.content);
});


app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((P)=>{
       return id === P.id;
    });
    //  console.log(id);
    res.render("editPost.ejs",{ post });
});

app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((P)=>id !== P.id);
     res.redirect("/posts");
});
