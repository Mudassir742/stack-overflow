import { useState } from "react";

import { Modal, Form } from "react-bootstrap";

import answerInstance from "../../axios/answerInstance";

const PostQuestion = ({ showAsk, setShowAsk }) => {
  const [answerDetail, setAnswerDetail] = useState([{ description: "" }]);

  const handleDetailChange = (e) => {
    setQuestionDetail([...answerDetail, { [e.target.name]: e.target.value }]);
    console.log(answerDetail);
  };

  const postQuestion = async (e) => {
    e.preventDefault();
    try {
      // const postQuestionResponse = questionInstance.post("/create-question",{
      //   title:questionDetail.title,
      //   description:questionDetail.description
      // })

      console.log(answerDetail.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Modal show={showAsk} onHide={() => setShowAsk(false)}>
      <Modal.Header closeButton>
        <Modal.Title color="#F67328">Post Answer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
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
          Post
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default AskQuestion;
