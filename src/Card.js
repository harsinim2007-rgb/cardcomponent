import React, { useState } from "react";

function Card({ title }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="card">
      <h2>{title}</h2>

      <p className={liked ? "liked" : "not-liked"}>
        {liked ? "❤️ Liked" : "🤍 Not Liked"}
      </p>

      <button onClick={toggleLike}>{liked ? "Unlike" : "Like"}</button>
    </div>
  );
}

export default Card;
