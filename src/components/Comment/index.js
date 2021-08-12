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
  const [rating, setRating] = useState(1);

  const submitComment = () => {
    if(comment === ''){
      alert("You did not enter comment.")
    }
    if(rating < 1 || rating > 5){
      alert("Enter a rating between 1 and 5.")
    }
    else{
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
    }

    
  };

  return (
    <div>
      <input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="leave your comment"
      />
      <input
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="rating"
        type="number"
        max="5"
        min="1"
      />
      <button onClick={submitComment}>Submit</button>
    </div>
  );
};

export default Comment;
