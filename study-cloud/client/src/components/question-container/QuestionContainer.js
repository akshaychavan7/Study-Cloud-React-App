import "./QuestionContainer.css";
import OptionsList from "./Options-List/OptionsList";
import Accordions from "./accordions/Accordions";

const QuestionContainer = (props) => {
  return (
    <div className="outside-container">
      {console.log("from QC", props)}
      <div className="container-body">
        <div className="question-header">Question #{props.questionNumber}</div>
        <div>
          <div className="question-content">
            {props.question}
            {props.image.length > 0 ? (
              <div className="question-image-container">
                <img
                  className="question-image"
                  src={props.image}
                  alt="question image"
                />
              </div>
            ) : (
              <span></span>
            )}
            <div>
              <OptionsList
                options={props.options}
                correctAnswer={props.correctAnswer}
              />
            </div>
          </div>
          <div>
            <hr />
            <Accordions
              comments={props.comments}
              questionNumber={props.questionNumber}
              loggedUserDetails={props.loggedUserDetails}
              explaination={props.explaination}
              explainationLink={props.explainationLink}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionContainer;
