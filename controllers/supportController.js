import SupportTickets from "../models/Support.js";
import mongoose from "mongoose";

// GET all support tickets
export const getSupportTickets = async (req, res) => {
  const allSupportTickets = await SupportTickets.find({}).sort({
    createdAt: -1,
  }); // find all patients

  res.status(200).json(allSupportTickets);
};

// GET a single support ticket
export const getSupportTicket = async (req, res) => {
  const { id } = req.params;

  // check if the id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No support ticket with that id");
  }

  const supportTicket = await SupportTickets.findById(id);

  // check if the support ticket exists
  if (!supportTicket) {
    return res.status(404).json({ message: "Support ticket not found" });
  }

  res.status(200).json(supportTicket);
};

// POST a new support ticket
export const createSupportTicket = async (req, res) => {
  const { name, patientName, email, phone, description } = req.body;

  try {
    const newSupportTicket = await SupportTickets.create({
      name,
      patientName,
      email,
      phone,
      description,
    });
    res.status(200).json(newSupportTicket);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE a support ticket
export const deleteSupportTicket = async (req, res) => {
  const { id } = req.params;

  // check if the id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No support ticket with that id");
  }

  const supportTicket = await SupportTickets.findOneAndDelete({ _id: id });

  if (!supportTicket) {
    return res.status(404).json({ message: "Support ticket not found" });
  }

  res.status(200).json(supportTicket);
};

// UPDATE a support ticket
export const updateSupportTicket = async (req, res) => {
  const { id } = req.params;

  // check if the id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No support ticket with that id");
  }

  const supportTicket = await SupportTickets.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!supportTicket) {
    return res.status(404).json({ message: "Support ticket not found" });
  }

  res.status(200).json(supportTicket);
};
