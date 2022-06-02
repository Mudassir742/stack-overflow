import { useState } from "react";

import { Modal, Form } from "react-bootstrap";

import questionInstance from "../../axios/questionInstance";

const AskQuestion = ({ showAsk, setShowAsk }) => {
  const [questionDetail, setQuestionDetail] = useState([
    { title: "", description: "" },
  ]);

  const handleDetailChange = (e) => {
    setQuestionDetail([...questionDetail, { [e.target.name]: e.target.value }]);
    console.log(questionDetail);
  };

  const postQuestion = async (e) => {
    e.preventDefault();
    try {
      // const postQuestionResponse = questionInstance.post("/create-question",{
      //   title:questionDetail.title,
      //   description:questionDetail.description
      // })

      console.log(questionDetail.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Modal show={showAsk} onHide={() => setShowAsk(false)}>
      <Modal.Header closeButton>
        <Modal.Title color="#F67328">Ask Question</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Question : </Form.Label>
            <Form.Control type="text" placeholder="How can I " name="title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Detail</Form.Label>
            <Form.Control as="textarea" rows={3} name="description" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn" onClick={() => setShowAsk(false)}>
          Cancel
        </button>
        <button className="btn ask px-4" onClick={() => setShowAsk(false)}>
          Ask
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default AskQuestion;
