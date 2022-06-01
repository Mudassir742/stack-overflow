const Bookmark = require("../models/bookmarkAnswerModel");

exports.getBookmarkAnswers = async (req, res) => {
  try {
    const { userId } = req.user;

    const bookmarkAnswer = await Bookmark.find({ userId: userId }).populate([
      { path: "userId", select: ["name"] },
      { path: "answerId", select: ["description", "votes"] },
    ]);
    const bookmarkAnswerCount = await Bookmark.countDocuments({}).exec();
    return res.status(201).json({
      data: bookmarkAnswer,
      totalBookmarkAnswers: bookmarkAnswerCount,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: "unexpected server error" });
  }
};

exports.getBookmarkAnswerById = async (req, res) => {
  try {
    const { userId } = req.user;
    const { bookmarkAnswerId } = req.params;

    if (!bookmarkAnswerId || !userId) {
      return res.status(400).json({ error: "missing input" });
    }

    const bookmarkAnswerDetail = await Bookmark.findById({
      _id: bookmarkAnswerId,
      userId: userId,
    }).populate([
      { path: "userId", select: ["name"] },
      { path: "answerId", select: ["description", "votes"] },
    ]);

    if (!bookmarkAnswerDetail) {
      return res.status(404).json({ error: "data not found" });
    }

    return res.status(201).json({ data: bookmarkAnswerDetail });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: "unexpected server error" });
  }
};

exports.deleteBookmarkAnswer = async (req, res) => {
  try {
    const { userId } = req.user;
    const { bookmarkAnswerId } = req.params;

    if (!bookmarkAnswerId || !userId) {
      return res.status(400).json({ error: "missing input" });
    }

    const isBookmarkAnswerDeleted = await Bookmark.deleteOne({
      _id: bookmarkAnswerId,
    });

    return res.status(201).json({ data: "bookmark answer deleted" });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: "unexpected server error" });
  }
};
