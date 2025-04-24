const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MONGO_DB ="mongodb://127.0.0.1:27017/relationDemo";


main()
    .then(()=>{console.log("connected to db");})
    .catch((err)=>{console.log(err);})

async function main(){
    await mongoose.connect(MONGO_DB);
}

const userSchema = new Schema({
    username: String,
    email: String,
});

const PostSchema = new Schema({
    content: String ,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref:"User",
    }
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", PostSchema);

