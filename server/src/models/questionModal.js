const mongoose = require("mongoose");

const questionSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      require: [true, "missing owner id"],
      ref: "user",
    },
    title: {
      type: String,
      require: [true, "Enter blog title"],
    },
    description: {
      type: String,
      require: [true, "enter blog description"],
    },
    votes: {
      type: Number,
      default: 0,
    },
    tags: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("question", questionSchema);
