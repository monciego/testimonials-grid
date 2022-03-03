import React from "react";

const Testimonial = ({
  avatar,
  name,
  subName,
  testimonialTitle,
  testimonialBody,
}) => {
  return (
    <div className="card">
      <header className="card-header">
        <img src={avatar} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>{subName}</p>
        </div>
      </header>
      <p className="card-lead">{testimonialTitle}</p>
      <p className="quote">{testimonialBody}</p>
    </div>
  );
};

export default Testimonial;
