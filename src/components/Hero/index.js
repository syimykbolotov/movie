import React, { useContext, useEffect, useState } from "react";
import { KEY_API } from "../../API";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../../context";

const Hero = () => {
  // let [sea, setSea] = useState("");
  // let nav = useNavigate();
  const [popular, setPopular] = useState([]);
  const {language} = useContext(LanguageContext)
  let result = [];
  function get(key) {
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=1`
    ).then((res) => {
      res.data.results.map((el) => {
        result = [...result, el.backdrop_path];
      });
      setPopular(result);
    });
  }
  useEffect(() => {
    get(KEY_API);
  }, [language]);
  // console.log(popular);

  return (
    <div id="hero">
      {/* <div className="container"> */}
      <div
        className="hero"
        style={{
          background: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${
            popular[Math.round(Math.random() * popular.length)]
          }) no-repeat top/cover `,
        }}
      >
        <h1> Добро пожаловать.</h1>
        <h2>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h2>
        <div className="hero--search">
          <input
            type="text"
            placeholder="Найти фильм, сериал, персону......"
            // onChange={(e) => {
            //   setSea(e.target.value);
            // }}
          />
          <button
          // onClick={() => nav(`/search/${sea}`)}
          >
            Search
          </button>
        </div>
      </div>
      <div className="check">
        <h1>
          That's a <br /> Wrap 2023
        </h1>
        <h3>The best (and worst) of the year from TMDB.</h3>
        <button>Check it out</button>
      </div>
      <div className="bghero"></div>
      {/* </div> */}
    </div>
  );
};

export default Hero;
