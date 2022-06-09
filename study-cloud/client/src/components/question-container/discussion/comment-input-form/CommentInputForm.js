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

const CommentInputForm = (props) => {
  const [comment, setComment] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [submitWarningClasses, setSubmitWarningClasses] = useState(
    "submit-warning hidden"
  );
  function submitComment() {
    if (comment.length == 0 || selectedOption.length == 0) {
      setSubmitWarningClasses("submit-warning visible");
    } else {
      setSubmitWarningClasses("submit-warning hidden");
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
