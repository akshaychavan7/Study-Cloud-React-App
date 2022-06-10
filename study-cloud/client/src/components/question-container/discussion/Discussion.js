import { useState } from "react";
import CommentInputForm from "./comment-input-form/CommentInputForm";
import Comment from "./comment/Comment";
import "./Discussion.css";
const Discussion = (props) => {
  const [comments, setComments] = useState(props.comments);

  function settingComments(obj) {
    console.log("settingComments called", obj);
    setComments(obj);
  }

  return (
    <div className="discussion-section-div">
      {console.log("from discussion->", props.comments)}
      <CommentInputForm
        comments={comments}
        setComments={settingComments}
        questionNumber={props.questionNumber}
      />
      {comments.length ? (
        comments.map((comment) => {
          return <Comment key={Math.random().toString()} comment={comment} />;
        })
      ) : (
        <div className="no-comments-text">
          Be the first one to add an insightful comment for this question! 😃
        </div>
      )}
    </div>
  );
};

export default Discussion;
