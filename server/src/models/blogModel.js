const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("blog", blogSchema);
