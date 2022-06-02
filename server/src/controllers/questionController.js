const Question = require("../models/questionModal");

exports.getQuestions = async (req, res) => {
  try {
    const allQuestion = await Question.find({}).populate([
      { path: "userId", select: ["name"] },
    ]);
    const questionCount = await Question.countDocuments({}).exec();
    return res
      .status(201)
      .json({ data: allQuestion, totalQuestions: questionCount });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: "unexpected server error" });
  }
};

exports.getQuestionById = async (req, res) => {
  try {
    const { questionId } = req.params;

    if (!questionId) {
      return res.status(400).json({ error: "missing input" });
    }

    const questionDetail = await Question.findById({ _id: questionId });

    if (!questionDetail) {
      return res.status(404).json({ error: "data not found" });
    }

    return res.status(201).json({ data: questionDetail });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: "unexpected server error" });
  }
};

exports.getAllQuestionsOfSpecificUser = async (req, res) => {
  try {
    const { userId } = req.user;

    if (!userId) {
      return res.status(400).json({ error: "missing input" });
    }

    const userQuestions = await Question.find({ userId });

    const questionCount = await Question.countDocuments({}).exec();

    return res
      .status(201)
      .json({ data: userQuestions, totalQuestions: questionCount });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: "unexpected error occurred" });
  }
};

exports.deleteQuestionById = async (req, res) => {
  try {
    const { QuestionId } = req.params;

    const { userId } = req.user;

    if (!userId || !QuestionId) {
      return res.status(400).json({ error: "missing details" });
    }

    const isQuestionDeleted = await Question.findOneAndDelete({
      _id: QuestionId,
      userId: userId,
    });

    return res.status(201).json({ data: "question deleted succesfully" });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: "unexpected server occurred" });
  }
};

exports.addQuestion = async (req, res) => {
  try {
    const { userId } = req.user;
    const { title, description } = req.body;

    if (!userId || !title || !description) {
      return res.status(400).json({ error: "missing details" });
    }

    const newQuestion = new Question({
      title: title,
      description: description,
      userId: userId,
    });

    const saveQuestion = await newQuestion.save();

    if (saveQuestion) {
      return res.status(201).json({ data: saveQuestion });
    }
    return res.status(422).json({ error: "unable to add question" });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: "unexpected server error" });
  }
};

exports.editQuestion = async (req, res) => {
  try {
    const { userId } = req.user;
    const { title, description, questionId, tags } = req.body;

    if (!userId || !title || !description || !questionId || tags) {
      return res.status(400).json({ error: "missing inputs" });
    }

    const isQuestionUpdated = await Question.updateOne(
      { _id: questionId, userId: userId },
      { title: title, description: description, tags: tags }
    );

    return res.status(201).json({ data: "question updated!" });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: "unexpected server error" });
  }
};

exports.updateVotes = async (req, res) => {
  try {
    const { userId } = req.user;
    const { questionId, operation } = req.body;

    if (!userId || !questionId || operation) {
      return res.status(400).json({ error: "missing inputs" });
    }

    let updateVoteCount;
    if (operation === "inc") {
      updateVoteCount = await Question.updateOne(
        { _id: questionId, userId: userId },
        { $inc: { votes: 1 } }
      );
    } else {
      updateVoteCount = await Question.updateOne(
        { _id: questionId, userId: userId },
        { $inc: { votes: -1 } }
      );
    }

    return res.status(201).json({ data: "vote updated!" });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: "unexpected server error" });
  }
};
