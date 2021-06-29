import React from "react";
import "./css/carousel.css";
import "./css/card.css";

const Card = ({ posts }) => {
  return posts.map(post => {
    return (
      <article className="card content">
        <img className="card-image" src={post.image} alt={post.name} />
        <div className="card-body">
          <h5 className="card-title">{post.name}</h5>
          <p className="card-text">{post.bio}</p>
        </div>
      </article>
    );
  });
};

export default Card;
