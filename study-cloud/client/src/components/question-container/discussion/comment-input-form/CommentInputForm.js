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

const CommentInputForm = (props) => {
  return (
    <FormControl style={{ width: "100%", marginBottom: "50px" }}>
      <div>
        <FormLabel className="radio-button-group-label">
          Choose answer
        </FormLabel>
        <RadioGroup row className="radio-group">
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
        value={""}
        onChange={() => {}}
      />
      <div className="comment-button-div">
        <Button variant="contained">Submit</Button>
      </div>
    </FormControl>
  );
};

export default CommentInputForm;
