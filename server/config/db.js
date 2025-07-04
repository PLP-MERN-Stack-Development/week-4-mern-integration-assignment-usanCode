
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected ✅');
  } catch (error) {
    console.error('MongoDB connection failed ❌', err);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;