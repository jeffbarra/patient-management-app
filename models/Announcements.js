import mongoose from "mongoose";

const newAnnouncement = mongoose.Schema(
  {
    date: String,
    announcement: String,
  },
  { timestamps: true }
);

// create a new model from the schema
export default mongoose.model("announcements", newAnnouncement);
