import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';



const uri =process.env.MONGODB_URI;

mongoose.connect(uri)
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});
