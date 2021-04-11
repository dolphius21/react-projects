import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const prevButtonHandler = () => {
    index - 1 < 0
      ? setIndex(people.length - 1)
      : setIndex((index) => index - 1);
  };

  const nextButtonHandler = () => {
    index + 1 > people.length - 1
      ? setIndex(0)
      : setIndex((index) => index + 1);
  };

  const randomButtonHandler = () => {
    const randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === index) return randomButtonHandler();
    setIndex(randomIndex);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevButtonHandler}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextButtonHandler}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomButtonHandler}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
