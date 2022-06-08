import { Avatar, IconButton, Stack, Tooltip } from "@mui/material";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import ReportRoundedIcon from "@mui/icons-material/ReportRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import "./Comment.css";

const Comment = (props) => {
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
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  return (
    <div className="comments-container">
      <Stack direction="row" spacing={1}>
        <Avatar {...stringAvatar("Akshay Chavan")} />
        <div>
          <Stack direction="row" spacing={1}>
            <span className="vertical-center">Akshay Chavan</span>
            <span className="comment-period-passed vertical-center">
              5 days, 19 hours ago
            </span>
          </Stack>
          <p className="comment-text">
            We recommend collecting users with the same responsibilities into
            groups and assigning IAM roles to the groups rather than to
            individual users. For example, you can create a "data scientist"
            group and assign appropriate roles to enable interaction with
            BigQuery and Cloud Storage. When a new data scientist joins your
            team, you can simply add them to the group and they will inherit the
            defined permissions. You can create and manage groups through the
            Admin Console.
          </p>
          <Stack direction="row" spacing={3} style={{ width: "100%" }}>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Upvote">
                <IconButton color="primary" component="span" size="small">
                  <ThumbUpRoundedIcon fontSize="inherit" />
                </IconButton>
              </Tooltip>
              <span className="upvote-count-text vertical-center">
                Upvoted 5 times
              </span>
            </Stack>

            <Tooltip title="Report">
              <IconButton color="primary" component="span" size="small">
                <ReportRoundedIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete comment">
              <IconButton color="primary" component="span" size="small">
                <DeleteRoundedIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>
          </Stack>
        </div>
      </Stack>
    </div>
  );
};

export default Comment;
