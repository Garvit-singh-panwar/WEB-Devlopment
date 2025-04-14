const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

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

let chats = [
    {
        from: "neha",
        to:"priya",
        msg: "send me your exam Sheet",
        created_at: new Date() , // it is a function in js which create random date data is in the UTC formate
    }
    ,
    {
        from: "rahul",
        to:"priya",
        msg: "send me your exam Sheet",
        created_at: new Date() , // it is a function in js which create random date data is in the UTC formate
    }
    ,
    {
        from: "farhan",
        to:"priya",
        msg: "send me your exam Sheet",
        created_at: new Date() , // it is a function in js which create random date data is in the UTC formate
    }
    ,
    {
        from: "aman",
        to:"priya",
        msg: "send me your exam Sheet",
        created_at: new Date() , // it is a function in js which create random date data is in the UTC formate
    },
    {
        from: "soumya",
        to:"priya",
        msg: "send me your exam Sheet",
        created_at: new Date() , // it is a function in js which create random date data is in the UTC formate
    }

];