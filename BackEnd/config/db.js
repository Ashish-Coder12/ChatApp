import mongoose from "mongoose";



// Connects to the MongoDB database using the MONGO_URI environment variable
const connectToDB = async () => {
   try {
       const options = {
           useNewUrlParser: true,
           useUnifiedTopology: true,
       };
       const connection = await mongoose.connect(process.env.MONGO_URI, options);
       console.log("MongoDB connected:", connection.connection.host);
   } catch (error) {
       console.error(error);
   }
}

export {connectToDB};