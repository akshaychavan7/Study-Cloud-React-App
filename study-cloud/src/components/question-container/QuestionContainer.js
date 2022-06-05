import "./QuestionContainer.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OptionsList from "./Options-List/OptionsList";

const QuestionContainer = (props) => {
  return (
    <div className="outside-container">
      {/* {console.log("no", props.key)} */}

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
            <Accordion elevation={0} style={{ backgroundColor: "aliceblue" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Explaination</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{props.explaination}</Typography>
              </AccordionDetails>
            </Accordion>
            {/* <hr /> */}

            <Accordion elevation={0} style={{ backgroundColor: "aliceblue" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Discussion</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionContainer;
