import React from "react";
import { Link } from "react-router-dom";
import mov from "../../img/mov.jpg";

const MovieCard = ({ el }) => {
  return (
    <div className="movieCard">
      <Link to={`/details/${el.id}`}>
        {el.poster_path ? (
          <img
            src={`https://media.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`}
            alt="img"
          />
        ) : (
          <img
            style={{
              width: "200px",
              height: "330px",
            }}
            src={mov}
            alt="img"
          />
        )}
      </Link>
      <h4>{el.title}</h4>
      <h4>{el.release_date}</h4>
    </div>
  );
};

export default MovieCard;
