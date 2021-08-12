import React, { useState } from "react";
import axios from "axios";

const Comment = ({
  comments,
  setComments,
  diningHallsId,
  reviews,
  setReviews,
}) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const submitComment = () => {
    let newComment = {
      text: comment,
      diningHallsId: parseInt(diningHallsId),
    };

    let newReview = {
      rating: parseInt(rating),
      diningHallsId: parseInt(diningHallsId),
    };

    axios.post(`http://localhost:8000/comments`, newComment).then((res) => {
      newComment.id = res.data.id;
      setComments((comments) => [...comments, newComment]);
    });

    axios.post(`http://localhost:8000/reviews`, newReview).then((res) => {
      newReview.id = res.data.id;
      setReviews((reviews) => [...reviews, newReview]);
    });

    setComment("");
    setRating(0);
  };

  return (
    <div>
      <input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="comment"
      />
      <input
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        type="number"
        max="5"
        min="1"
      />
      <button onClick={submitComment}>Submit</button>
    </div>
  );
};

export default Comment;
