import mongoose from "mongoose";
import { DB_NAME } from "../constans.js";

export const connectDB = async () => {

  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(`\n DB Connectd  DB HOST: ${connectionInstance}`);
    console.log('server connected')
  } catch (error) {

   
     console.log("mongo db connect error", Error);
    // process.exit(1);
  }
};
