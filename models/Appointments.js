import mongoose from "mongoose";

const Appointments = mongoose.Schema(
  {
    name: String,
    dob: String,
    email: String,
    phone: String,
    monthsPregnant: String,
    dueDate: String,
    apptType: String,
  },
  { timestamps: true }
);

// create a new model from the schema
export default mongoose.model("appointments", Appointments);
