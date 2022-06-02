import { useState, useEffect } from "react";

import { Spinner } from "react-bootstrap";

import {
  IconArrowBarDown,
  IconArrowBarUp,
  IconEditCircle,
} from "@tabler/icons";

import bookmarkInstance from "../../axios/bookmarkInstance";
import answerInstance from "../../axios/answerInstance";
import { getToken } from "../../store/localStorage";

const AnswerDetail = ({ answer, isAnsBookmarked }) => {
  const token = getToken();
  const [answerVote, setAnswerVote] = useState(answer?.votes);
  const [isBookmarked, setIsBookmarked] = useState(isAnsBookmarked);

  useEffect(() => {
    setAnswerVote(answer?.votes);
    setIsBookmarked(isAnsBookmarked);
  }, [answer]);

  const [bookmarkLoading, setBookmarkLoading] = useState(false);

  const bookmarkAnswer = async (e) => {
    e.preventDefault();
    try {
      setBookmarkLoading(true);
      const bookmarkResponse = await bookmarkInstance.post(
        "/bookmark-answer",
        {
          answerId: answer._id,
        },
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      setBookmarkLoading(false);
      setIsBookmarked(true)
      console.log(bookmarkResponse.data.data);
    } catch (err) {
      setBookmarkLoading(false);
      console.log(err.message);
    }
  };

  const removeBookmarkAnswer = async (e) => {
    e.preventDefault();
    try {
      setBookmarkLoading(true);
      const bookmarkResponse = await bookmarkInstance.post(
        "/remove-bookmark-answer",
        {
          answerId: answer._id,
        },
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      setBookmarkLoading(false);
      setIsBookmarked(false)
      console.log(bookmarkResponse.data.data);
    } catch (err) {
      setBookmarkLoading(false);
      console.log(err.message);
    }
  };

  const handleAnswerVotes = async (e, operation) => {
    e.preventDefault();
    try {
      const voteResponse = await answerInstance.post(
        "/update-answer-vote",
        {
          answerId: answer._id,
          operation: operation,
        },
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      if (operation === "inc") {
        setAnswerVote(answerVote + 1);
      } else {
        setAnswerVote(answerVote - 1);
      }
      console.log(voteResponse.data.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="answer-section">
        <div className="divider my-4"></div>
        <div className="answer-content d-flex  justify-content-between">
          <div className="votes-btn d-flex flex-column align-items-center mx-3">
            <IconArrowBarUp
              onClick={(e) => handleAnswerVotes(e, "inc")}
              style={{ cursor: "pointer" }}
            />
            <span className="my-2">{answerVote}</span>
            <IconArrowBarDown
              onClick={(e) => handleAnswerVotes(e, "dec")}
              style={{ cursor: "pointer" }}
            />
          </div>

          <div className="answer-body w-100">
            <p
              className="answer-heading"
              style={{ width: "90%", marginLeft: "3rem" }}
            >
              {answer?.description}
            </p>
            <div
              className="answer-btns d-flex justify-content-between"
              style={{ marginTop: "2rem", marginLeft: "3rem" }}
            >
              <div className="btn-groups">
                {/* <button className="btn btn-danger">Delete</button> */}
                {!isBookmarked ? (
                  <button className="btn btn-success" onClick={bookmarkAnswer}>
                    BookMark
                  </button>
                ) : (
                  <button
                    className="btn btn-success"
                    onClick={removeBookmarkAnswer}
                  >
                    Un-Bookmark
                  </button>
                )}
              </div>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  cursor: "pointer",
                  borderRadius: "50%",
                }}
              >
                {/* <IconEditCircle size={40} color="#F67328" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnswerDetail;
