import "./CommentInputForm.css";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { addComment } from "../../../../services/commentsServicesClient";

const CommentInputForm = (props) => {
  const [comment, setComment] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [submitWarningClasses, setSubmitWarningClasses] = useState(
    "submit-warning hidden"
  );

  let answersMap = { A: "1", B: "2", C: "3", D: "4" };

  function submitComment() {
    if (comment.length == 0 || selectedOption.length == 0) {
      setSubmitWarningClasses("submit-warning visible");
    } else {
      setSubmitWarningClasses("submit-warning hidden");

      let commentsObject = {
        comment: comment, // needed for API
        is_flagged: "false",
        questionid: props.questionNumber.toString(), // needed for API
        selected_answer: answersMap[selectedOption], // needed for API
        timestamp: new Date(),
        userid: "akshaychavan7", // needed for API
        votes: "0",
      };
      addComment(commentsObject); // adding comments to server database

      // set the comments so that UI will update
      props.setComments([commentsObject, ...props.comments]);

      // reset the controls, once comment has been successully posted
      setComment("");
      setSelectedOption("");
    }
  }

  return (
    <FormControl style={{ width: "100%", marginBottom: "50px" }}>
      <div>
        <FormLabel className="radio-button-group-label">
          Choose answer
        </FormLabel>
        <RadioGroup
          row
          className="radio-group"
          defaultValue={selectedOption}
          onChange={(event) => setSelectedOption(event.target.value)}
        >
          <FormControlLabel
            value="A"
            control={<Radio size="small" />}
            label="A"
          />
          <FormControlLabel
            value="B"
            control={<Radio size="small" />}
            label="B"
          />
          <FormControlLabel
            value="C"
            control={<Radio size="small" />}
            label="C"
          />
          <FormControlLabel
            value="D"
            control={<Radio size="small" />}
            label="D"
          />
        </RadioGroup>
      </div>

      <TextField
        className="comment-textfield"
        id="outlined-name"
        label="Comment"
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        required
      />
      <div className="comment-button-div">
        <Button variant="contained" onClick={submitComment}>
          Submit
        </Button>
      </div>
      <p className={submitWarningClasses}>
        Make sure that you have filled all the fields correctly!
      </p>
    </FormControl>
  );
};

export default CommentInputForm;
