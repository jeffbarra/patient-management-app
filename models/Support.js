import mongoose from "mongoose";

const Support = mongoose.Schema(
  {
    name: String,
    patientName: String,
    email: String,
    phone: String,
    description: String,
  },
  { timestamps: true }
);

// create a new model from the schema
export default mongoose.model("support_tickets", Support);
