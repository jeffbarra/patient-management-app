import newQuestionnaire from "../models/NewQuestionnaire.js";
import mongoose from "mongoose";

// GET all questionnaires
export const getNewQuestionnaires = async (req, res) => {
  const allNewQuestionnaires = await newQuestionnaire
    .find({})
    .sort({ createdAt: -1 });

  res.status(200).json(allNewQuestionnaires);
};

// GET a single Questionnaire
export const getNewQuestionnaire = async (req, res) => {
  const { id } = req.params;

  // check if the id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No questionnaire with that id");
  }

  const initialQuestionnaire = await newQuestionnaire.findById(id);

  // check if the questionnaire exists
  if (!initialQuestionnaire) {
    return res.status(404).json({ message: "Questionnaire not found" });
  }

  res.status(200).json(initialQuestionnaire);
};

// POST a new questionnaire
export const createNewQuestionnaire = async (req, res) => {
  const { name, dob, email, phone, monthsPregnant, dueDate, type } = req.body;

  try {
    const newInitialQuestionnaire = await newQuestionnaire.create({
      name,
      dob,
      email,
      phone,
      monthsPregnant,
      dueDate,
      type,
    });
    res.status(200).json(newInitialQuestionnaire);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE a questionnaire
export const deleteNewQuestionnaire = async (req, res) => {
  const { id } = req.params;

  // check if the id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No questionnaire with that id");
  }

  const initialQuestionnaire = await newQuestionnaire.findOneAndDelete({
    _id: id,
  });

  if (!initialQuestionnaire) {
    return res.status(404).json({ message: "Questionnaire not found" });
  }

  res.status(200).json(initialQuestionnaire);
};

// UPDATE a questionnaire
export const updateNewQuestionnaire = async (req, res) => {
  const { id } = req.params;

  // check if the id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No questionnaire with that id");
  }

  const initialQuestionnaire = await newQuestionnaire.findByIdAndUpdate(
    id,
    req.body,
    { new: true }
  );

  if (!initialQuestionnaire) {
    return res.status(404).json({ message: "Questionnaire not found" });
  }

  res.status(200).json(initialQuestionnaire);
};
