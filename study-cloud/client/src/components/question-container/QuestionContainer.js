import "./QuestionContainer.css";
import OptionsList from "./Options-List/OptionsList";
import Accordions from "./accordions/Accordions";

const QuestionContainer = (props) => {
  return (
    <div className="outside-container">
      <div className="container-body">
        <div className="question-header">Question #{props.questionNumber}</div>
        <div>
          <div className="question-content">
            {props.question}
            <div>
              {console.log("options", props.options)}
              <OptionsList
                options={props.options}
                correctAnswer={props.correctAnswer}
              />
            </div>
          </div>
          <div>
            <hr />
            <Accordions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionContainer;
