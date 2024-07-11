import mongoose from 'mongoose';

const Medical_ReportSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
      required: true,
    },
    diagnose: {
      type: String,
      required: true,
    },
    booldGroup: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Medical_Report = mongoose.model(
  'Medical_Report',
  Medical_ReportSchema
);
