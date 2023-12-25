import mongoose from "mongoose"

const ChatModel = mongoose.Schema({
    chatName:{type:String,trim:true},
    Users:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }],
    latestMessage:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message"
    }
},
{
    timestamps:true,
})

const Chat = mongoose.model("Chat",ChatModel);
export {Chat};