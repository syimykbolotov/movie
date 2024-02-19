import React, { useContext } from "react";
import { Link } from "react-router-dom";
import mov from "../../img/mov.jpg";
import { LanguageContext } from "../../context";

const MovieCard = ({ el }) => {
  const { dark, setDark } = useContext(LanguageContext);
  return (
    <div
      className="movieCard"
      style={{
        border: dark ? "2px solid white" : "2px solid black",
      }}
    >
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
