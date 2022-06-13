import {
  Alert,
  Avatar,
  IconButton,
  Snackbar,
  Stack,
  Tooltip,
} from "@mui/material";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import ReportRoundedIcon from "@mui/icons-material/ReportRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import AssistantPhotoRoundedIcon from "@mui/icons-material/AssistantPhotoRounded";
import "./Comment.css";
import { useState } from "react";
import { upvoteComment } from "../../../../services/commentsServicesClient";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let answerCharacter = ["A", "B", "C", "D"];
const Comment = (props) => {
  console.log("test", props);
  let upvotedByProps = props.comment.upvoted_by;
  let upvotedByIntialArray = getUpvotedByArrayFromString(
    upvotedByProps.substring(0, upvotedByProps.length - 1)
  );
  const [upvotedByList, setUpvotedByList] = useState(upvotedByIntialArray);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("error");
  const [snackbarMessage, setSnackbarMessage] = useState(
    "You have already upvoted this comment!"
  );

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: 26,
        height: 26,
        fontSize: 10,
      },
      // children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
      children: `${name[0].toString().toUpperCase()}`,
    };
  }

  function calculateTimePeriodPassedFromNow(timestamp) {
    // if (timestamp === "Now") timestamp = new Date();

    // diffTimeMillis = Math.abs(new Date(timestamp) - new Date(Date.now()));
    // diffTimeSeconds = Math.ceil(diffTimeMillis/1000);
    let day = new Date(timestamp).getDay();
    let monthIndex = new Date(timestamp).getMonth();
    let year = new Date(timestamp).getFullYear();
    // console.log(day, months[monthIndex], year, months[0], monthIndex);
    return day + " " + months[monthIndex] + ", " + year;
  }

  // string list to array e.g. user1,user2,user3, => [user1, user2, user3]
  function getUpvotedByArrayFromString(upvotedByStringList) {
    let upvotedByArray = [];
    for (let userID of upvotedByStringList.split(",")) {
      upvotedByArray.push(userID);
    }
    console.log(upvotedByArray);
    return upvotedByArray;
  }

  // function to check if the logged user has already upvoted this comment or not
  function hasLoggedUserAlreadyUpvoted(userid) {
    console.log("checking", userid, upvotedByList);

    for (let upvotedByUserid of upvotedByList) {
      if (userid == upvotedByUserid) return true;
    }

    return false;
  }

  function reportClickHandler() {}

  function upvoteClickHandler(updvotedByUserID, commentUserID, comment) {
    if (hasLoggedUserAlreadyUpvoted(updvotedByUserID)) {
      setSnackbarSeverity("error");
      setSnackbarMessage("You have already upvoted this comment!");
    } else {
      setSnackbarSeverity("success");
      setSnackbarMessage("Upvoted successfully!");
      let requestParams = {
        userid: commentUserID,
        comment: comment,
        updvotedByUserID: updvotedByUserID,
      };
      upvoteComment(requestParams);
    }

    handleSnackbarClick();
  }

  function deleteClickHandler() {}

  const handleSnackbarClick = () => {
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  return (
    <div className="comments-container">
      <Stack direction="row" spacing={1}>
        <Avatar {...stringAvatar(props.comment.userid)} />
        <div>
          <Stack direction="row" spacing={1}>
            <span className="vertical-center">{props.comment.userid}</span>
            <span className="comment-period-passed vertical-center">
              {calculateTimePeriodPassedFromNow(props.comment.timestamp)}
            </span>
          </Stack>
          <Tooltip
            title={
              "Selected answer: " +
              answerCharacter[props.comment.selected_answer - 1]
            }
          >
            <p className="comment-text">{props.comment.comment}</p>
          </Tooltip>
          <Stack direction="row" spacing={3} style={{ width: "100%" }}>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Upvote">
                <IconButton
                  color="primary"
                  component="span"
                  size="small"
                  onClick={() =>
                    upvoteClickHandler(
                      props.loggedUserDetails.name,
                      props.comment.userid,
                      props.comment.comment
                    )
                  }
                >
                  <ThumbUpRoundedIcon fontSize="inherit" />
                </IconButton>
              </Tooltip>
              <span className="upvote-count-text vertical-center">
                Upvoted {props.comment.votes} times
              </span>
            </Stack>

            <Tooltip title="Report">
              <IconButton
                color="primary"
                component="span"
                size="small"
                onClick={reportClickHandler}
              >
                <AssistantPhotoRoundedIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete comment">
              <IconButton
                color="primary"
                component="span"
                size="small"
                onClick={deleteClickHandler}
              >
                <DeleteRoundedIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>
          </Stack>
        </div>
      </Stack>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Comment;
