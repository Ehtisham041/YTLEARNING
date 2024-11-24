import mongoose from "mongoose";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();





connectDB()
.then(()=>{

 app.listen(process.env.PORT || 8000 ,()=>{
    console.log(`server is running on port ${process.env.PORT || 8000}`)
 })  
})
.catch((error)=>{
console.log("mongo db conn failed 'index.js' ",error);


})
































// function connectDB()
// {

// }

// connectDB();

// ;( async ()=>{

// try{

//    await mongoose.connect (`${process.env.MONGODB_URI}/${DB_NAME}`);
//    console.log("Connected to MongoDB");
//    app.on("error",()=>{
//     console.log("Error connecting to MongoDB",error);
//     throw error;
//    })
//    app.listen(process.env.PORT,()=>{
//     console.log(`Server is running on port ${process.env.PORT}`)
//    })
// }
// catch(error){
//     console.error(error)
// }


// }




// )()

