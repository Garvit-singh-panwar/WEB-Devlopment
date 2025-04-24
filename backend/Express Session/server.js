const express = require("express");
const app = express();
const port = 8080;
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

const sessionOptions = {
    secret: "mysuperSecretString",
    resave: false,
    saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(flash());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.get("/register",(req,res)=>{
    let { name = "annonymous" } = req.query;    
    req.session.name = name;
    req.flash("success" , "user registered successfully");
    res.redirect("/hello")

});

app.get("/hello" , (req,res)=>{
    res.locals.message = req.flash("success");
    res.render("page.ejs" , {name: req.session.name });
})

app.listen(port, () => {
    console.log("Server is listening on port", port);
});


// app.get("/test",(req,res)=>{
//     res.send("test successful");
// })

// app.get("/request",(req,res)=>{
//     req.session.count;
//     // track the single session
//     if(!req.session.count){
//         req.session.count = 1;
//     }
//     else{
//         req.session.count++;
//     }
//     res.send(`you sent a request ${ req.session.count } times`)  
// })