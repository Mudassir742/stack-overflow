import {
  IconArrowBarDown,
  IconArrowBarUp,
  IconEditCircle,
} from "@tabler/icons";
import React, { useState } from "react";

import AskQuestion from "../../layouts/Modals/AskQuestion";

import { Form } from "react-bootstrap";

const QuestionDetail = ({ questionId }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
    <AskQuestion showAsk={open} setShowAsk = {setOpen} answer={true}/>
      <div className="question-detail-section">
        <div className="question-detail-container">
          <div className="question-detail-header">
            <h3
              style={{
                marginBottom: "1rem",
                background: "#F67328",
                color: "white",
                width: "min-content",
                padding: ".2rem .8rem",
                borderRadius: "8px",
              }}
            >
              Question:
            </h3>
            <h4 className="question-heading">
              How can i access the /var/www folder from VM instance (SSH
              console) in Google Cloud?
            </h4>
            <div className="time">
              <span>Asked</span>
              <span className="mx-2" style={{ fontSize: ".9rem" }}>
                (time)
              </span>
            </div>
          </div>
          <div className="divider my-4"></div>
          <div className="question-detail-body w-100 d-flex  justify-content-between">
            <div className="votes-btn d-flex flex-column align-items-center mx-2">
              <IconArrowBarUp />
              <span className="my-2">0</span>
              <IconArrowBarDown />
            </div>
            <p className="mx-2">
              I'm asking for help on an issue I've been having while getting
              some VM instances/servers back online. the problem is that a
              person who was working before at our company, set up the VM
              instances before, left us some documentation, where it ask us to
              Go to Google Cloud Compute Engine VM Instances and find 2 VM
              instances called "gap-mongo" and "gap-node". When we went into
              Compute EngineVM Instances, nothing was there (seems like the
              instances got removed or moved somewhere else, but we can't see it
              in our VM instance list), So we decided to start creating a new
              the 2 VM instances ("gap-mongo" and "gap-node") from scratch and
              follow the documentation provided.
            </p>
          </div>
          <div className="divider my-4"></div>

          <div className="answers">
            <div className="answer-header d-flex align-items-center justify-content-between">
              <h4
                style={{
                  textAlign: "center",
                  marginBottom: "1rem",
                  background: "#F67328",
                  color: "white",
                  width: "220px",
                  padding: ".4rem .8rem",
                  borderRadius: "8px",
                }}
              >
                Total Answers 2
              </h4>
              <Form.Select
                aria-label="Default select example"
                style={{ width: "250px" }}
              >
                <option value="0">Highest Score (default)</option>
                <option value="1">Date Modified (newest first)</option>
                <option value="2">Date Created (old first)</option>
              </Form.Select>
            </div>
            <div className="answer-section">
              <div className="divider my-4"></div>
              <div className="answer-content d-flex  justify-content-between">
                <div className="votes-btn d-flex flex-column align-items-center mx-3">
                  <IconArrowBarUp />
                  <span className="my-2">0</span>
                  <IconArrowBarDown />
                </div>

                <div className="answer-body w-100">
                  <p
                    className="answer-heading"
                    style={{ width: "90%", marginLeft: "3rem" }}
                  >
                    you can use "useRef" to scroll to that position with click
                    event or try useEffect for scroll to that position after
                    component rendered. Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Illo veritatis optio quia nisi atque omnis
                    consequuntur possimus nam sint tenetur? Accusamus quod, sit
                    repudiandae corrupti pariatur in repellendus sed distinctio.
                  </p>
                  <div
                    className="answer-btns d-flex justify-content-between"
                    style={{ marginTop: "2rem", marginLeft: "3rem" }}
                  >
                    <div className="btn-groups">
                      <button className="btn btn-danger">Delete</button>
                      <button className="btn btn-info mx-3">Useful</button>
                      <button className="btn btn-success">BookMark</button>
                    </div>
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        cursor: "pointer",
                        borderRadius: "50%",
                      }}
                    >
                      <IconEditCircle size={40} color="#F67328" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="answer-section">
              <div className="divider my-4"></div>
              <div className="answer-content d-flex  justify-content-between">
                <div className="votes-btn d-flex flex-column align-items-center mx-3">
                  <IconArrowBarUp />
                  <span className="my-2">0</span>
                  <IconArrowBarDown />
                </div>

                <div className="answer-body w-100">
                  <p
                    className="answer-heading"
                    style={{ width: "90%", marginLeft: "3rem" }}
                  >
                    you can use "useRef" to scroll to that position with click
                    event or try useEffect for scroll to that position after
                    component rendered. Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Illo veritatis optio quia nisi atque omnis
                    consequuntur possimus nam sint tenetur? Accusamus quod, sit
                    repudiandae corrupti pariatur in repellendus sed distinctio.
                  </p>
                  <div
                    className="answer-btns d-flex justify-content-between"
                    style={{ marginTop: "2rem", marginLeft: "3rem" }}
                  >
                    <div className="btn-groups">
                      <button className="btn btn-danger">Delete</button>
                      <button className="btn btn-info mx-3">Useful</button>
                      <button className="btn btn-success">BookMark</button>
                    </div>
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        cursor: "pointer",
                        borderRadius: "50%",
                      }}
                    >
                      <IconEditCircle size={40} color="#F67328" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider my-4"></div>
            <h4 onClick={()=>setOpen(true)}
              style={{
                textAlign: "center",
                marginBottom: "1rem",
                background: "#F67328",
                color: "white",
                width: "220px",
                padding: ".4rem .8rem",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Post Answer
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionDetail;
