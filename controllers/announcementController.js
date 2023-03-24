import Announcement from "../models/Announcements.js";
import mongoose from "mongoose";

// GET all announcements
export const getAnnouncements = async (req, res) => {
  const allAnnouncements = await Announcement.find({}).sort({ createdAt: -1 }); // find all announcements

  res.status(200).json(allAnnouncements);
};

// GET a single announcement
export const getAnnouncement = async (req, res) => {
  const { id } = req.params;

  // check if the id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No announcement with that id");
  }

  const announcement = await Announcement.findById(id);

  // check if the announcement exists
  if (!announcement) {
    return res.status(404).json({ message: "Announcement not found" });
  }

  res.status(200).json(announcement);
};

// POST a new announcement
export const createAnnouncement = async (req, res) => {
  const { date, announcement } = req.body; // send these in the body of the request

  try {
    const newAnnouncement = await Announcement.create({
      // creating a new variable called "newAnnouncement" and setting it equal to the result of Announcemnt.create() function
      date,
      announcement,
    });
    res.status(200).json(newAnnouncement); // send the new announcement back to the client (the front end
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE an announcement
export const deleteAnnouncement = async (req, res) => {
  const { id } = req.params;

  // check if the id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No announcement with that id");
  }

  const announcement = await Announcement.findOneAndDelete({ _id: id });

  if (!announcement) {
    return res.status(404).json({ message: "Announcement not found" });
  }

  res.status(200).json(announcement);
};

// UPDATE an announcement
export const updateAnnouncement = async (req, res) => {
  const { id } = req.params;

  // check if the id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No announcement with that id");
  }

  const announcement = await Announcement.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!announcement) {
    return res.status(404).json({ message: "Announcement not found" });
  }

  res.status(200).json(announcement);
};
