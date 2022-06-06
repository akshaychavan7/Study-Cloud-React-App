import "./OptionsList.css";
import { useState } from "react";

const OptionsList = (props) => {
  const [optionsClasses, setOptionsClasses] = useState("");
  const [optionClicked, setOptionClicked] = useState(false);
  const [clickIndex, setClickIndex] = useState(-1);

  //   const optionClickHandler = (event, index) => {
  //     console.log("event", props.correctAnswer, index);
  //     if (
  //       props.correctAnswer.length === 1 &&
  //       props.correctAnswer[0] - 1 === index
  //     ) {
  //       setOptionsClasses("correct-answer");
  //     }
  //   };

  return (
    <ol type="A">
      {props.options.map((option, index) => {
        return (
          <li
            key={option}
            className={
              optionClicked
                ? props.correctAnswer.length === 1 &&
                  props.correctAnswer[0] - 1 === index
                  ? "correct-answer"
                  : clickIndex === index
                  ? "incorrect-answer"
                  : ""
                : ""
            }
            onClick={(event) => {
              setOptionClicked(true);
              setClickIndex(index);
              //   optionClickHandler(event, index);
            }}
          >
            {option}
          </li>
        );
      })}
    </ol>
  );
};

export default OptionsList;
