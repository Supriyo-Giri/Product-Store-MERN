import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config;

export const connectDb = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Connected to mongoDB successfully\nhost:${conn.connection.host}`);
    } catch (error) {
        console.log(`Error connecting to mongoDB\nerror: ${error.message}`);
        process.exit(1);
    }
}