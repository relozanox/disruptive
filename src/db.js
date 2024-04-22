import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);

        console.log('Database is connected');
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;
