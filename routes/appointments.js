import express from "express";
import {
  createAppointment,
  getAppointments,
  getAppointment,
  deleteAppointment,
  updateAppointment,
} from "../controllers/appointmentController.js";

// Create a router
const router = express.Router();

// Route Handler Functions

// GET all appointments
router.get("/", getAppointments);

// GET a single appointment
router.get("/:id", getAppointment);

// POST a new appointment
router.post("/", createAppointment);

// DELETE a appointment
router.delete("/:id", deleteAppointment);

// UPDATE an appointment
router.patch("/:id", updateAppointment);

export default router;
