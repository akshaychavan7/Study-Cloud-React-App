import "./Accordions.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Discussion from "../discussion/Discussion";
import BarChart from "./charts/BarChart";

const Accordions = (props) => {
  return (
    <div>
      {/* Explaination */}
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
      {/* Discussion */}
      <Accordion elevation={0} style={{ backgroundColor: "aliceblue" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Discussion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Discussion
            comments={props.comments}
            questionNumber={props.questionNumber}
            loggedUserDetails={props.loggedUserDetails}
          />
        </AccordionDetails>
      </Accordion>
      {/* Question Stats */}
      <Accordion elevation={0} style={{ backgroundColor: "aliceblue" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Question Stats</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <BarChart comments={props.comments} />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Accordions;
