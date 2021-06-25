import React from "react";
import "./css/carousel.css";
import "./css/card.css";

const Card = ({ posts }) => {
  return posts.map((post) => {
    return (
      <article class="card content">
        <img className="card-image" src={post.image} alt={post.name} />
        <div class="card-body">
          <h5 class="card-title">{post.name}</h5>
          <p class="card-text">{post.bio}</p>
        </div>
      </article>
    );
  });
};

export default Card;
