import mongoose from "mongoose";

const Patients = mongoose.Schema(
  {
    name: String,
    dob: String,
    email: String,
    phone: String,
    monthsPregnant: String,
    dueDate: String,
  },
  { timestamps: true }
);

// create a new model from the schema
export default mongoose.model("patients", Patients);
