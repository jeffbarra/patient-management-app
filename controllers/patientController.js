import Patients from "../models/Patients.js";
import mongoose from "mongoose";

// GET all patients
export const getPatients = async (req, res) => {
  const allPatients = await Patients.find({}).sort({ createdAt: -1 }); // find all patients

  res.status(200).json(allPatients);
};

// GET a single patient
export const getPatient = async (req, res) => {
  const { id } = req.params;

  // check if the id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No patient with that id");
  }

  const patient = await Patients.findById(id);

  // check if the patient exists
  if (!patient) {
    return res.status(404).json({ message: "Patient not found" });
  }

  res.status(200).json(patient);
};

// POST a new patient
export const createPatient = async (req, res) => {
  const { name, dob, email, phone, monthsPregnant, dueDate, type } = req.body; // send these in the body of the request

  try {
    const newPatient = await Patients.create({
      // creating a new variable called "newPatient" and setting it equal to the result of the Patient.create() function
      name,
      dob,
      email,
      phone,
      monthsPregnant,
      dueDate,
      type,
    });
    res.status(200).json(newPatient); // send the new patient back to the client (the front end
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE a patient
export const deletePatient = async (req, res) => {
  const { id } = req.params;

  // check if the id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No patient with that id");
  }

  const patient = await Patients.findOneAndDelete({ _id: id });

  if (!patient) {
    return res.status(404).json({ message: "Patient not found" });
  }

  res.status(200).json(patient);
};

// UPDATE a patient
export const updatePatient = async (req, res) => {
  const { id } = req.params;

  // check if the id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No patient with that id");
  }

  const patient = await Patients.findByIdAndUpdate(id, req.body, { new: true });

  if (!patient) {
    return res.status(404).json({ message: "Patient not found" });
  }

  res.status(200).json(patient);
};
