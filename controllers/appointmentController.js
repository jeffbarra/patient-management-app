import Appointments from "../models/Appointments.js";
import mongoose from "mongoose";

// GET all appointments
export const getAppointments = async (req, res) => {
  const allAppointments = await Appointments.find({}).sort({ createdAt: -1 });

  res.status(200).json(allAppointments);
};

// GET a single appointment
export const getAppointment = async (req, res) => {
  const { id } = req.params;

  // check if the id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No appointment with that id");
  }

  const appointment = await Appointments.findById(id);

  // check if the appointment exists
  if (!appointment) {
    return res.status(404).json({ message: "Appointment not found" });
  }

  res.status(200).json(appointment);
};

// POST a new appointment
export const createAppointment = async (req, res) => {
  const { name, dob, email, phone, monthsPregnant, dueDate, apptType } =
    req.body;

  try {
    const newAppointment = await Appointments.create({
      name,
      dob,
      email,
      phone,
      monthsPregnant,
      dueDate,
      apptType,
    });
    res.status(200).json(newAppointment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE an appointment
export const deleteAppointment = async (req, res) => {
  const { id } = req.params;

  // check if the id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No appoinment with that id");
  }

  const appointment = await Appointments.findOneAndDelete({ _id: id });

  if (!appointment) {
    return res.status(404).json({ message: "Appointment not found" });
  }

  res.status(200).json(appointment);
};

// UPDATE an appointment
export const updateAppointment = async (req, res) => {
  const { id } = req.params;

  // check if the id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No appointment with that id");
  }

  const appointment = await Appointments.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!appointment) {
    return res.status(404).json({ message: "Appointment not found" });
  }

  res.status(200).json(appointment);
};
