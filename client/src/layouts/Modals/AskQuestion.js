import React from "react";

import { Modal, Form } from "react-bootstrap";

const AskQuestion = ({ showAsk, setShowAsk, answer }) => {
  return (
    <Modal show={showAsk} onHide={() => setShowAsk(false)}>
      <Modal.Header closeButton>
        <Modal.Title color="#F67328">
          {answer ? "Post Answer" : "Ask Question"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {!answer && (
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Question : </Form.Label>
              <Form.Control type="email" placeholder="How can I " />
            </Form.Group>
          )}
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Detail</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn" onClick={() => setShowAsk(false)}>
          Cancel
        </button>
        <button className="btn ask px-4" onClick={() => setShowAsk(false)}>
          {answer ? "Post" : "Ask"}
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default AskQuestion;
