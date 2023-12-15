import { useState } from "react";

import { useParams } from "react-router-dom";
import { postComment } from "../utils";

const AddComment = (prop) => {
  const { allComments, setComments } = prop;
  console.log(allComments, setComments, "add comment function");
  const [newComment, setNewComment] = useState({
    username: "jessjelly",
    body: "",
  });

  const { id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    setComments([...allComments, newComment]);
    console.log(allComments, "handle submit");

    postComment(newComment, id).then(() => {
      setNewComment({
        username: "jessjelly",
        body: "",
      });
    });
  };

  const handleChange = (event) => {
    setNewComment({
      ...newComment,
      body: event.target.value,
    });
  };

  return (
    <form className="add_comment_form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="new_comment"
        placeholder="Input Comment Here"
        value={newComment.body}
        onChange={handleChange}
      />
      <button id="submit" type="submit">
        add comment
      </button>
    </form>
  );
};

export default AddComment;
