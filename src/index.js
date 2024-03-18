import dotenv from 'dotenv'
import mongoose from "mongoose";
import { DB_NAME } from "./constans.js";
import express from 'express'
import { connectDB } from "../src/db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()








/* const app = express()
;
(async()=>{
    try {
     await  mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
     app.on('error',(error)=>{
        console.log("ERRR: ",error);
        throw error
     })
     app.listen(process.env.PORT,()=>{
        console.log(`App is listen ${process.env.PORT}`)
     })
    } catch (error) {
        console.log(error.message)
    }
})()

*/