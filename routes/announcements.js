import express from "express";
import {
  getAnnouncements,
  getAnnouncement,
  createAnnouncement,
  deleteAnnouncement,
  updateAnnouncement,
} from "../controllers/announcementController.js";

// Create a router
const router = express.Router();

// Route Handler Functions

// GET all announcements
router.get("/", getAnnouncements);

// GET a single announcement
router.get("/:id", getAnnouncement);

// POST a new announcement
router.post("/", createAnnouncement);

// DELETE a patient
router.delete("/:id", deleteAnnouncement);

// UPDATE a patient
router.patch("/:id", updateAnnouncement); // updatePatient is a function from patientController.js

export default router;
