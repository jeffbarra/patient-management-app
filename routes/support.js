import express from "express";
import {
  createSupportTicket,
  getSupportTickets,
  getSupportTicket,
  deleteSupportTicket,
  updateSupportTicket,
} from "../controllers/supportController.js";

// Create a router
const router = express.Router();

// Route Handler Functions

// GET all patients
router.get("/", getSupportTickets); // getPatients is a function from patientController.js

// GET a single patient
router.get("/:id", getSupportTicket); // getPatient is a function from patientController.js

// POST a new patient
router.post("/", createSupportTicket); // createPatient is a function from patientController.js

// DELETE a patient
router.delete("/:id", deleteSupportTicket); // deletePatient is a function from patientController.js

// UPDATE a patient
router.patch("/:id", updateSupportTicket); // updatePatient is a function from patientController.js

export default router;
