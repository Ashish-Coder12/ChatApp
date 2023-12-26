import mongoose from "mongoose";

const connectToDB = async() =>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: true,
        })
        console.log("Mongo DB conected : " + connection.connection.host);
    } catch (error) {
        console.log(error);
    }
}

export {connectToDB};