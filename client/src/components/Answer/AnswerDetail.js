import {
  IconArrowBarDown,
  IconArrowBarUp,
  IconEditCircle,
} from "@tabler/icons";

const AnswerDetail = ({ answer }) => {
  return (
    <>
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
              you can use "useRef" to scroll to that position with click event
              or try useEffect for scroll to that position after component
              rendered. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Illo veritatis optio quia nisi atque omnis consequuntur
              possimus nam sint tenetur? Accusamus quod, sit repudiandae
              corrupti pariatur in repellendus sed distinctio.
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
        </div>
      </div>
    </>
  );
};

export default AnswerDetail;
