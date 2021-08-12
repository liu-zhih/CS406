import React, { useEffect, useState } from "react";
import Comment from "../Comment";
import './Store.css';

const Store = (props) => {
  const [diningHall, setDiningHall] = useState({
    id: 0,
    name: "Default",
    rating: 0,
    address: "Default",
  });
  const [comments, setComments] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [reviewAverage, setReviewAverage] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // get information on dining hall
  useEffect(() => {
    const id = props.match.params.id;

    fetch(`http://localhost:8000/diningHalls/${id}`)
      .then((response) => response.json())
      .then((response) => setDiningHall(response))
      .catch(console.error);
  }, [props.match.params.id]);

  // get the comments
  useEffect(() => {
    const id = props.match.params.id;

    fetch(`http://localhost:8000/comments/?diningHallsId=${id}`)
      .then((response) => response.json())
      .then((response) => setComments(response))
      .catch(console.error);
  }, [props.match.params.id]);

  // get the reviews
  useEffect(() => {
    const id = props.match.params.id;

    fetch(`http://localhost:8000/reviews/?diningHallsId=${id}`)
      .then((response) => response.json())
      .then((response) => setReviews(response))
      .then(() => setLoaded(true))
      .catch(console.error);
  }, [props.match.params.id]);

  // calculate review average
  useEffect(() => {
    const length = reviews.length;

    let tempSum = 0;

    reviews.forEach((review) => (tempSum += review.rating));

    setReviewAverage(Math.round(tempSum / length));
  }, [reviews]);

  return (
    <div
      className="store"
      style={{ visibility: loaded ? "visible" : "hidden" }}
    >
      <div className="infoContainer">
        <h1>{diningHall.name}</h1>
        <h1>{diningHall.address}</h1>
        <img src={diningHall.img} alt="" className="dImg"/>
        <h1>Average Rating: {reviewAverage}</h1>
      
        <Comment
          comments={comments}
          setComments={setComments}
          reviews={reviews}
          setReviews={setReviews}
          diningHallsId={diningHall.id}
        />
        <div className="commentContainer">
        {comments.map((comment) => (
          <div key={comment.id}>
            <h3 className="commentItem">{comment.text}</h3>
          </div>
        ))}
        </div>
        
      </div>

      <div>
        <img src={diningHall.map} alt="" className="map"/>
      </div>
      
    </div>
  );
};

export default Store;
