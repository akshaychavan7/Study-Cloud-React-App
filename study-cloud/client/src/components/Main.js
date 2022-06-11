import React, { useState, useEffect } from "react";
import Header from "./header/Header";
import "./Main.css";
import QuestionContainer from "./question-container/QuestionContainer";
import { getAllComments } from "../services/commentsServicesClient";
import { useNavigate } from "react-router";

const questionsList = [
  {
    question:
      "Every employee of your company has a Google account. Your operational team needs to manage a large number of instances on Compute Engine. Each member of this team needs only administrative access to the servers. Your security team wants to ensure that the deployment of credentials is operationally efficient and must be able to determine who accessed a given instance. What should you do?",
    options: [
      "Generate a new SSH key pair. Give the private key to each member of your team. Configure the public key in the metadata of each instance.",
      "Ask each member of the team to generate a new SSH key pair and to send you their public key. Use a configuration management tool to deploy those keys on each instance.",
      "Ask each member of the team to generate a new SSH key pair and to add the public key to their Google account. Grant the ג€compute.osAdminLoginג€ role to the Google group corresponding to this team.",
      "Generate a new SSH key pair. Give the private key to each member of your team. Configure the public key as a project-wide public SSH key in your Cloud Platform project and allow project-wide public SSH keys on each instance.",
    ],
    correctAnswer: [3],
    explaination: "",
    image: "",
  },
  {
    question:
      "You need to create a custom VPC with a single subnet. The subnet's range must be as large as possible. Which range should you use?",
    options: ["0.0.0.0/0", "10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16"],
    correctAnswer: [2],
    explaination: "",
    image: "",
  },
  {
    question:
      "You want to select and configure a cost-effective solution for relational data on Google Cloud Platform. You are working with a small set of operational data in one geographic location. You need to support point-in-time recovery. What should you do?",
    options: [
      "Select Cloud SQL (MySQL). Verify that the enable binary logging option is selected.",
      "Select Cloud SQL (MySQL). Select the create failover replicas option.",
      "Select Cloud Spanner. Set up your instance with 2 nodes.",
      "Select Cloud Spanner. Set up your instance as multi-regional.",
    ],
    correctAnswer: [1],
    explaination: "",
    image: "",
  },
  {
    question:
      "You want to configure autohealing for network load balancing for a group of Compute Engine instances that run in multiple zones, using the fewest possible steps. You need to configure re-creation of VMs if they are unresponsive after 3 attempts of 10 seconds each. What should you do?",
    options: [
      "Create an HTTP load balancer with a backend configuration that references an existing instance group. Set the health check to healthy (HTTP)",
      "Create an HTTP load balancer with a backend configuration that references an existing instance group. Define a balancing mode and set the maximum RPS to 10.",
      "Create a managed instance group. Set the Autohealing health check to healthy (HTTP)",
      "Create a managed instance group. Verify that the autoscaling setting is on.",
    ],
    correctAnswer: [3],
    explaination: "",
    image: "",
  },
];

let testComments = [
  {
    questionid: "1",
    userid: "dan80",
    comment:
      "C is correct - https://cloud.google.com/compute/docs/instances/managing-instance-access",
    selected_answer: "3",
    votes: "0",
    is_flagged: "false",
    timestamp: "2022-06-08T20:48:30.714Z",
  },
  {
    questionid: "1",
    userid: "adedj99",
    comment:
      'We recommend collecting users with the same responsibilities into groups and assigning IAM roles to the groups rather than to individual users. For example, you can create a "data scientist" group and assign appropriate roles to enable interaction with BigQuery and Cloud Storage. When a new data scientist joins your team, you can simply add them to the group and they will inherit the defined permissions. You can create and manage groups through the Admin Console.',
    selected_answer: "3",
    votes: "0",
    is_flagged: "false",
    timestamp: "2022-06-08T20:49:26.824Z",
  },
  {
    questionid: "1",
    userid: "zakhili",
    comment: "Send private key to users is not safe, i think its C",
    selected_answer: "3",
    votes: "0",
    is_flagged: "false",
    timestamp: "2022-06-08T21:03:40.105Z",
  },
  {
    questionid: "1",
    userid: "pfabio",
    comment:
      "C is correct based on this site: https://cloud.google.com/compute/docs/instances/connecting-advanced (Recommended) Enable OS Login. OS Login uses IAM roles to provide your public SSH key to the instance through your Google Account or a managed user account.",
    selected_answer: "3",
    votes: "0",
    is_flagged: "false",
    timestamp: "2022-06-08T21:09:05.665Z",
  },
  {
    questionid: "1",
    userid: "AltHexMax",
    comment:
      "As it is giving permissions to a Group and each SSH key pair would be unique for each member.",
    selected_answer: "3",
    votes: "0",
    is_flagged: "false",
    timestamp: "2022-06-08T21:10:25.774Z",
  },
  {
    questionid: "2",
    userid: "CarlS",
    comment:
      "I got this question in one the trainings I did in udemy: https://www.udemy.com/course/google-cloud-associate-engineer-exam-practice-tests/?referralCode=810D02D4A159FC3E36CC\nB is correct. Pay attention to the question, is talking about custom VPC subnet and is not mentioning you will use automatic subnet mode creation. If you set subnet to custom, the minimum size is /8.",
    selected_answer: "2",
    votes: "0",
    is_flagged: "false",
    timestamp: "2022-06-09T11:10:23.524Z",
  },
  {
    questionid: "3",
    userid: "akshaychavan7",
    comment: "test comment from UI",
    selected_answer: "1",
    votes: "0",
    is_flagged: "false",
    timestamp: "2022-06-09T19:24:59.655Z",
  },
  {
    questionid: "3",
    userid: "akshaychavan7",
    comment: "test comment 2",
    selected_answer: "2",
    votes: "0",
    is_flagged: "false",
    timestamp: "2022-06-09T19:32:37.345Z",
  },
  {
    questionid: "3",
    userid: "akshaychavan7",
    comment: "test comment 3",
    selected_answer: "3",
    votes: "0",
    is_flagged: "false",
    timestamp: "2022-06-09T19:33:43.165Z",
  },
  {
    questionid: "3",
    userid: "akshaychavan7",
    comment: "test comment 4",
    selected_answer: "4",
    votes: "0",
    is_flagged: "false",
    timestamp: "2022-06-09T19:35:53.485Z",
  },
  {
    questionid: "3",
    userid: "akshaychavan7",
    comment: "test comment 5",
    selected_answer: "2",
    votes: "0",
    is_flagged: "false",
    timestamp: "2022-06-09T19:43:42.065Z",
  },
  {
    questionid: "3",
    userid: "akshaychavan7",
    comment: "test comment 6",
    selected_answer: "3",
    votes: "0",
    is_flagged: "false",
    timestamp: "2022-06-09T19:46:14.206Z",
  },
  {
    questionid: "3",
    userid: "akshaychavan7",
    comment: "test comment 7",
    selected_answer: "1",
    votes: "0",
    is_flagged: "false",
    timestamp: "2022-06-09T19:47:48.135Z",
  },
  {
    questionid: "3",
    userid: "akshaychavan7",
    comment: "test comment 8",
    selected_answer: "1",
    votes: "0",
    is_flagged: "false",
    timestamp: "2022-06-09T19:49:38.235Z",
  },
  {
    questionid: "3",
    userid: "akshaychavan7",
    comment: "test comment 9",
    selected_answer: "1",
    votes: "0",
    is_flagged: "false",
    timestamp: "2022-06-09T19:52:29.326Z",
  },
  {
    questionid: "3",
    userid: "akshaychavan7",
    comment: "test comment 10",
    selected_answer: "1",
    votes: "0",
    is_flagged: "false",
    timestamp: "2022-06-09T19:55:35.165Z",
  },
  {
    questionid: "3",
    userid: "akshaychavan7",
    comment: "test comment 11",
    selected_answer: "1",
    votes: "0",
    is_flagged: "false",
    timestamp: "2022-06-09T19:56:57.180Z",
  },
  {
    questionid: "3",
    userid: "akshaychavan7",
    comment: "test comment 12",
    selected_answer: "2",
    votes: "0",
    is_flagged: "false",
    timestamp: "2022-06-09T20:03:32.115Z",
  },
  {
    questionid: "3",
    userid: "akshaychavan7",
    comment: "test comment 13",
    selected_answer: "2",
    votes: "0",
    is_flagged: "false",
    timestamp: "2022-06-09T20:05:36.025Z",
  },
  {
    questionid: "3",
    userid: "akshaychavan7",
    comment: "test comment 14",
    selected_answer: "3",
    votes: "0",
    is_flagged: "false",
    timestamp: "2022-06-09T20:06:34.366Z",
  },
  {
    questionid: "3",
    userid: "akshaychavan7",
    comment: "test comment 15",
    selected_answer: "3",
    votes: "0",
    is_flagged: "false",
    timestamp: "2022-06-09T20:08:00.395Z",
  },
  {
    questionid: "4",
    userid: "akshaychavan7",
    comment: "Testing",
    selected_answer: "2",
    votes: "0",
    is_flagged: "false",
    timestamp: "2022-06-09T20:11:55.865Z",
  },
  {
    questionid: "4",
    userid: "akshaychavan7",
    comment: "Testing2",
    selected_answer: "1",
    votes: "0",
    is_flagged: "false",
    timestamp: "2022-06-09T20:15:33.385Z",
  },
];

const Main = (props) => {
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("props", props);
    if (!props.loggedUserDetails) {
      navigate("/login", {});
    }

    (async () => {
      const result = await getAllComments();
      console.log(result);
      setComments(result);
      // setComments(testComments);
    })();
  }, []);

  // filter the comments for given id
  const getFilteredCommentsByID = (comments, index) => {
    let filteredComments = comments.filter(
      (comment) => comment.questionid === index
    );
    return filteredComments;
  };

  return (
    <div>
      <Header />

      <div className="questions-list-div">
        {questionsList.map((questionObject, index) => {
          return (
            <QuestionContainer
              key={Math.random().toString()}
              questionNumber={index + 1}
              question={questionObject.question}
              options={questionObject.options}
              correctAnswer={questionObject.correctAnswer}
              image={questionObject.image}
              explaination={questionObject.explaination}
              comments={getFilteredCommentsByID(
                comments,
                (index + 1).toString()
              )}
            />
          );
        })}
      </div>
      <div className="print-div" onClick={window.print}>
        <img
          className="print-image"
          src={require("../assets/print_icon.png")}
          alt="Print this page"
        />
      </div>
    </div>
  );
};

export default Main;
