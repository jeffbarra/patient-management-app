import express from "express";
import {
  createNewQuestionnaire,
  getNewQuestionnaires,
  getNewQuestionnaire,
  deleteNewQuestionnaire,
  updateNewQuestionnaire,
} from "../controllers/newQuestionnaire.js";

// Create a router
const router = express.Router();

// Route Handler Functions

// GET all questionnaires
router.get("/", getNewQuestionnaires);

// GET a single questionnaire
router.get("/:id", getNewQuestionnaire);

// POST a new questionnaire
router.post("/", createNewQuestionnaire);

// DELETE a questionnaire
router.delete("/:id", deleteNewQuestionnaire);

// UPDATE a questionnaire
router.patch("/:id", updateNewQuestionnaire);

export default router;
