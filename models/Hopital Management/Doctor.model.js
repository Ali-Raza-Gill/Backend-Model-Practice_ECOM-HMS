import mongoose from 'mongoose';

const Doctor_Duration_In_Hospital = new mongoose.Schema({
  hospitalName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospital',
    required: true,
  },
  Duration: {
    type: String,
  },
});

const DoctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      default: 0,
      required: true,
    },
    worksInHospitals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
      },
      [Doctor_Duration_In_Hospital],
    ],
  },
  { timestamps: true }
);

export const Doctor = mongoose.model('Doctor', DoctorSchema);
