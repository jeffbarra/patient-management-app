import express from "express";
import {
  createPatient,
  getPatients,
  getPatient,
  deletePatient,
  updatePatient,
} from "../controllers/patientController.js";

// Create a router
const router = express.Router();

// Route Handler Functions

// GET all patients
router.get("/", getPatients); // getPatients is a function from patientController.js

// GET a single patient
router.get("/:id", getPatient); // getPatient is a function from patientController.js

// POST a new patient
router.post("/", createPatient); // createPatient is a function from patientController.js

// DELETE a patient
router.delete("/:id", deletePatient); // deletePatient is a function from patientController.js

// UPDATE a patient
router.patch("/:id", updatePatient); // updatePatient is a function from patientController.js

export default router;
