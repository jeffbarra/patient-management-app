import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import patientRoutes from "./routes/Patients.js";
import announcementRoutes from "./routes/Announcements.js";
import appointmentRoutes from "./routes/Appointments.js";
import newQuestionnaireRoutes from "./routes/newQuestionnaires.js";
import newSupportRoutes from "./routes/support.js";

// Initialize dotenv
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize App
const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json()); // any request that comes in, it's going to be able to accept JSON data in the body

// Initialize API
app.get("/test", (req, res) => {
  res.status(200).send("API is Running...");
});

// API Routes
app.use("/api/patients", patientRoutes); // /api/patients is the prefix for all routes in patientRoutes
app.use("/api/announcements", announcementRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/questionnaires/new", newQuestionnaireRoutes);
app.use("/api/support", newSupportRoutes);

// Listener
app.listen(port, () => console.log(`Listening on PORT ${port}`));
