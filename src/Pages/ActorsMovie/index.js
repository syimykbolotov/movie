import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { KEY_API } from "../../API";
import { Link, useParams } from "react-router-dom";
import mov from "../../img/mov.jpg";
import { LanguageContext } from "../../context";

const ActorsMovie = () => {
  let [ActMovies, setActMovies] = useState([]);
  let { id } = useParams();
  const {language} = useContext(LanguageContext)
  function ActMovie(key) {
    axios(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=${language}`
    ).then((res) => {
      setActMovies(res.data.cast);
    });
  }
  useEffect(() => {
    ActMovie(KEY_API);
  }, [language]);
  return (
    <div id="actorsMovie">
      <div className="container">
        <div className="actorsMovie">
          {ActMovies?.map((el) => (
            <div className="actorsMovie--block">
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
                      objectFit: "cover",

                    }}
                    src={mov}
                    alt="img"
                  />
                )}
              </Link>
              <h4>{el.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActorsMovie;
