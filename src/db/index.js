import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";


const  connectDB = async ()=>
{


    try
    {

        const conn = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       // console.log(conn);
        console.log(`\n MongoDB Connected db host : ${conn.connection.host}`)

    }
    catch(error){
        console.log("MONGO DB CONNECTION ERROR ",error);
        process.exit(1);
    }
}

export default connectDB;
