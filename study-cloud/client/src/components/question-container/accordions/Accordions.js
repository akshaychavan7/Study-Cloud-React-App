import "./Accordions.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Discussion from "../discussion/Discussion";

const Accordions = (props) => {
  return (
    <div>
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
      <Accordion elevation={0} style={{ backgroundColor: "aliceblue" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Discussion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Discussion comments={props.comments} />
        </AccordionDetails>
      </Accordion>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Accordions;
