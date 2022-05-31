import React from "react";

const QuestionList = ({ question }) => {
  return (
    <div className="question-content-container bg-white shadow w-100 my-4 py-5 px-3 d-flex justify-content-between">
      <div className="left-col mx-3">
        <div className="votes">
          <span>0</span>
          <span>votes</span>
        </div>
        <div className="votes my-2">
          <span>0</span>
          <span>answers</span>
        </div>
      </div>
      <div className="right-col mx-3">
        <div className="ask-question">
          <h5 className="question-heading">
            How can i access the /var/www folder from VM instance (SSH console)
            in Google Cloud?
          </h5>
          <p className="question-detail my-4">
            Thanks for reading this post, Today i'm kindly asking for help on an
            issue I've been having while getting some VM instances/servers back
            online, the problem is basically that a person who was working ...
          </p>
          <ul className="question-tags d-flex align-items-center">
            <li>
              <span>nodejs</span>
            </li>
            <li>
              <span>linux</span>
            </li>
            <li>
              <span>ubuntu</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuestionList;
