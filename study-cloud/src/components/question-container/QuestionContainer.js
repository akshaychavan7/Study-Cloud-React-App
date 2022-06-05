import "./QuestionContainer.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const QuestionContainer = (props) => {
  return (
    <div className="outside-container">
      <div className="container-body">
        <div className="question-header">Question #1</div>
        <div>
          <div className="question-content">
            Every employee of your company has a Google account. Your
            operational team needs to manage a large number of instances on
            Compute Engine. Each member of this team needs only administrative
            access to the servers. Your security team wants to ensure that the
            deployment of credentials is operationally efficient and must be
            able to determine who accessed a given instance. What should you do?
            <div>
              <ol type="A">
                <li className="correct-answer">
                  Generate a new SSH key pair. Give the private key to each
                  member of your team. Configure the public key in the metadata
                  of each instance.
                </li>
                <li>
                  Ask each member of the team to generate a new SSH key pair and
                  to send you their public key. Use a configuration management
                  tool to deploy those keys on each instance.
                </li>
                <li className="incorrect-answer">
                  Ask each member of the team to generate a new SSH key pair and
                  to add the public key to their Google account. Grant the
                  ג€compute.osAdminLoginג€ role to the Google group
                  corresponding to this team.
                </li>
                <li>
                  Generate a new SSH key pair. Give the private key to each
                  member of your team. Configure the public key as a
                  project-wide public SSH key in your Cloud Platform project and
                  allow project-wide public SSH keys on each instance
                </li>
              </ol>
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
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
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
