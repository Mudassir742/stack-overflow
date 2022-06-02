const questionController = require("../controllers/questionController");
const authenticateToken = require("../middlewares/authMiddleware");

const express = require("express");

const router = express.Router();

router.get("/get-questions", questionController.getQuestions);
router.get("/get-question/:questionId", questionController.getQuestionById);
router.get(
  "/get-user-questions",
  questionController.getAllQuestionsOfSpecificUser
);

router.delete(
  "/delete-question/:questionId",
  questionController.deleteQuestionById
);

router.post("/create-question", questionController.addQuestion);
router.post("/edit-question", questionController.editQuestion);

router.post("/update-question-vote", questionController.updateVotes);

module.exports = router;
