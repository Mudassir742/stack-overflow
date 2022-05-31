import React, { useState } from "react";
import { Link } from "react-router-dom";

import QuestionList from "./QuestionList/QuestionList";
import AskQuestion from "../../layouts/Modals/AskQuestion";

const Question = () => {
  const [showAsk, setShowAsk] = useState(false);

  return (
    <>
      <AskQuestion showAsk={showAsk} setShowAsk={setShowAsk} />
      <div className="question-container my-4 w-100 d-flex align-items-center justify-content-center">
        <div className="question-lists">
          <div className="question-header">
            <div className="current-question  d-flex d-flex align-items-center justify-content-between">
              <h5>ALL Questions</h5>
              <button className="btn ask" onClick={(e) => setShowAsk(true)}>
                Ask Question
              </button>
            </div>
          </div>
          <div className="question-data my-5">
            <Link
              to="/question"
              style={{ textDecoration: "none", color: "black" }}
            >
              <QuestionList />
            </Link>

            <Link
              to="/question"
              style={{ textDecoration: "none", color: "black" }}
            >
              <QuestionList />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
