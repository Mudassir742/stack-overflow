import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import QuestionList from "./QuestionList/QuestionList";
import AskQuestion from "../../layouts/Modals/AskQuestion";

import questionInstance from "../../axios/questionInstance";

const Question = () => {
  const [showAsk, setShowAsk] = useState(false);
  const [questionData, setQquestionData] = useState([]);

  useEffect(() => {
    const getQuestionData = () => {
      try {
        const questionResponse = questionInstance.get("/get-questions");

        console.log(questionResponse.data.data);
        setQquestionData(questionResponse.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getQuestionData();
  });

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
            {questionData &&
              questionData.map((value) => {
                return (
                  <Link
                    key={value._id}
                    to="/question"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <QuestionList question={value} />
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
