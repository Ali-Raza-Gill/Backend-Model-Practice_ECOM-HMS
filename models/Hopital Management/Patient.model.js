import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      reuired: true,
    },
    age: {
      type: Number,
      reuired: true,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
      reuired: true,
    },
    diagnosed: {
      type: String,
      required: true,
    },
    booldGroup: {
      type: String,
      required: true,
    },
    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Patient = mongoose.model('');
