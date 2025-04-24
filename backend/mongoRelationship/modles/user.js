const mongoose = require("mongoose");
const MONGO_DB ="mongodb://127.0.0.1:27017/relationDemo";


main()
    .then(()=>{console.log("connected to db");})
    .catch((err)=>{console.log(err);})

async function main(){
    await mongoose.connect(MONGO_DB);
}

const Schema= mongoose.Schema;

const userSchema = new Schema({
    username: String,
    addresses: [
        {
            location: String,
            city: String
        },
    ],
});



const User = mongoose.model("User" , userSchema);

const addUsers = async()=>{
    let user1 = new User({
        username: "Sherlockholmes",
        addresses: [{
            location: "221D Baker Street",
            city: "London",
        }]
    });
    user1.addresses.push({location: "p32 WallStreet" , city: "London"});
    await user1.save();
}