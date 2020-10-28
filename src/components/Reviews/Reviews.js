import React, { useEffect, useState } from "react";
import "./Reviews.css";
import { CardDeck } from "react-bootstrap";
import SingleReview from "../SingleReview/SingleReview";
const Reviews = () => {

  const [reviews , SetReviews] = useState([])
  useEffect(() => {
    fetch('http://localhost:8080/getReviews')
    .then(res => res.json())
    .then(recentAppoint =>{
      SetReviews(recentAppoint)
      })
  }, [])

  return (
    <div className='reviews'>
      <div className='reviewHeading'>
        <div className='row justify-content-lg-between flex-nowrap'>
          <div className='details d-flex justify-content-lg-end flex-column'>
            <p>testimonial</p>
            <h3>What's Our Patients Says</h3>
          </div>
          <div className='icon'>
            <img src="https://imgur.com/jn6kv9q.png" className='img-fluid' alt=""/>
          </div>
        </div>
      </div>
      <CardDeck>
        {reviews.map(review => (
          <SingleReview key={review.id} review={review} />
        ))}
      </CardDeck>
    </div>
  );
};

export default Reviews;
