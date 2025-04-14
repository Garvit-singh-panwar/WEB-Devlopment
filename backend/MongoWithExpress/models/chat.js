
const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
    {
        from : {
            type: String,
            required: true,
        },
        to : {
            type: String,
            required: true,
        },
        msg: {
            type: String,
            maxLength: 50,
            required: true,
        },
        created_at: {
            type: Date,
            required: true,
        },
    }
);

// think of this like creating a collection in mongo db with a choosen schema a rule for our document in schema
// here we pass two things in parameters 1st collection name(table name in a sql) or schema (defining column in table)
const Chat = mongoose.model("Chat",chatSchema );
module.exports = Chat;
