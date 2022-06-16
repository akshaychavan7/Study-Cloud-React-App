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
import {
  upvoteComment,
  flagComment,
  deleteComment,
} from "../../../../services/commentsServicesClient";
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
  let upvotedByProps = props?.comment?.upvoted_by
    ? props.comment.upvoted_by
    : "";
  let upvotedByIntialArray = getUpvotedByArrayFromString(
    upvotedByProps.substring(0, upvotedByProps.length - 1)
  );
  const [upvoteCount, setUpvoteCount] = useState(props.comment.votes);
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
    let day = new Date(timestamp).getDate();
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

  function flagClickHandler(userid, comment) {
    let requestObject = {
      userid: userid,
      comment: comment,
    };

    flagComment(requestObject);

    // pop up message for success
    setSnackbarSeverity("success");
    setSnackbarMessage("Comment has been flaged for review by administrator!");
    handleSnackbarClick();
  }

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
      // increment the upvote count and upvoted by variables in the current state
      setUpvoteCount(parseInt(upvoteCount) + 1);
      let updatedUpvotedByList = [...upvotedByList, updvotedByUserID];
      console.log("updatedUpvotedByList", updatedUpvotedByList);
      setUpvotedByList(updatedUpvotedByList);
    }

    handleSnackbarClick();
  }

  function deleteClickHandler(
    deletionByUserID,
    commentUserID,
    commentToDelete
  ) {
    console.log("check if equal", deletionByUserID, commentUserID);
    if (deletionByUserID === commentUserID) {
      let requestObject = {
        userid: commentUserID,
        comment: commentToDelete,
      };
      deleteComment(requestObject);

      //update state comments array
      let commentsArray = [...props.comments];

      commentsArray = commentsArray.filter((comment) => {
        console.log(
          "filter conditions",
          comment.userid,
          commentUserID,
          comment.comment,
          commentToDelete
        );
        return !(
          comment.userid === commentUserID &&
          comment.comment === commentToDelete
        );
      });

      console.log("commentsArray", commentsArray);
      props.setComments(commentsArray);

      // pop up message for success
      setSnackbarSeverity("success");
      setSnackbarMessage("Comment deleted successfully!");
    } else {
      // pop up message for error
      setSnackbarSeverity("error");
      setSnackbarMessage("You cannot delete other user's comment!");
    }
    handleSnackbarClick();
  }

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
                Upvoted {upvoteCount} times
              </span>
            </Stack>

            <Tooltip title="Flag/Report">
              <IconButton
                color="primary"
                component="span"
                size="small"
                onClick={() =>
                  flagClickHandler(props.comment.userid, props.comment.comment)
                }
              >
                <AssistantPhotoRoundedIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete comment">
              <IconButton
                color="primary"
                component="span"
                size="small"
                onClick={() =>
                  deleteClickHandler(
                    props.loggedUserDetails.name,
                    props.comment.userid,
                    props.comment.comment
                  )
                }
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
