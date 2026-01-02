import mongoose from "mongoose";
const connectDB = async () => {
  console.log(process.env.MONGODB_URL);
  return mongoose.connect(process.env.MONGODB_URL as string);
};


export default connectDB;
