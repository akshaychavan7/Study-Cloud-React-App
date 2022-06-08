import CommentInputForm from "./comment-input-form/CommentInputForm";
import Comment from "./comment/Comment";
import "./Discussion.css";

const Discussion = (props) => {
  return (
    <div className="discussion-section-div">
      <CommentInputForm />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default Discussion;
