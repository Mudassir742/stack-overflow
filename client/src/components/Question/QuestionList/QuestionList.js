import { useState } from "react";
import { IconEditCircle } from "@tabler/icons";

import EditQuestion from "../../../layouts/Modals/EditQuestion";

import questionInstance from "../../../axios/questionInstance";
import { getToken } from "../../../store/localStorage";

const QuestionList = ({ question, setReload }) => {
  const token = getToken();

  const [open, setOpen] = useState(false);

  const handleQuestionDelete = async (e) => {
    e.preventDefault();
    try {
      const deleteQuestionResponse = await questionInstance.delete(
        "/delete-question/" + question._id,
        {
          headers: {
            "x-access-token": token,
          },
        }
      );

      console.log(deleteQuestionResponse);
      setReload((prev) => !prev);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <EditQuestion
        question={question}
        setReload={setReload}
        showAsk={open}
        setShowAsk={setOpen}
      />
      <div className="question-content-container bg-white shadow w-100 my-4 py-5 px-3 d-flex">
        <div className="left-col mx-3">
          <div className="votes">
            <span>{question?.votes}</span>
            <span>votes</span>
          </div>
          <div className="votes my-2">
            <span>{question.totalAnswers}</span>
            <span>answers</span>
          </div>
        </div>
        <div className="right-col mx-3">
          <div className="ask-question">
            <h5 className="question-heading">{question?.title}</h5>
            <p className="question-detail my-4">{question?.description}</p>
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
          <div
            className="answer-btns d-flex justify-content-between"
            style={{ marginTop: "2rem", marginLeft: "3rem" }}
          >
            <button className="btn btn-danger" onClick={handleQuestionDelete}>
              Delete
            </button>

            <IconEditCircle
              size={40}
              color="#F67328"
              onClick={(e) => setOpen(true)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionList;
