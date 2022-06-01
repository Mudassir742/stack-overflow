const express = require("express");
const cors = require("cors");

const database = require("./config/database");

const userRoute = require("./routes/userRoute");
const questionRoute = require("./routes/questionRoute");
const answerRoute = require("./routes/answerRoute");
const bookmarkRoute = require("./routes/bookmarkAnswerRoute");

const app = express();

app.use(cors());

// === || Increasing limit of the server || ===
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// === || Connecting to Database || === //
database.connect();

// === || Routes || ===
app.use("/api/user", userRoute);
app.use("/api/question", questionRoute);
app.use("/api/answer", answerRoute);
app.use("/api/bookmark", bookmarkRoute);

module.exports = app;
