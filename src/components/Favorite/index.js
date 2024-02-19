import React, { useContext } from "react";
import { LanguageContext } from "../../context";
import MovieCard from "../MovieCard";

const Favorite = () => {
  const { favorite, dark } = useContext(LanguageContext);
  return (
    <div
      id="favorite"
      style={{
        background: dark ? "black" : "white",
        color: dark ? "white" : "black"
      }}
    >
      <div className="container">
        <h1>Favorite</h1>
        <div className="favorite">
          {favorite.map((el) => (
            <MovieCard el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
