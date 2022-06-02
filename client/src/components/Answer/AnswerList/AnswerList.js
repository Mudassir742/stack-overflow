const AnswerList = ({ answer }) => {
  return (
    <div className="question-content-container bg-white shadow w-100 my-4 py-5 px-3 d-flex">
      <div className="left-col mx-3">
        <div className="votes">
          <span>{answer?.votes}</span>
          <span>votes</span>
        </div>
      </div>
      <div className="right-col mx-3">
        <div className="ask-question">
          <p className="question-detail my-4">{answer?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AnswerList;
