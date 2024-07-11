import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      requried: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      min: [6, 'must be atleast 6 digits'],
      max: [15, 'no more than 15 digits'],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
