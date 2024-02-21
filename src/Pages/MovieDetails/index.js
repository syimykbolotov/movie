import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { KEY_API } from "../../API";
import { GoDotFill } from "react-icons/go";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdOutlineReplyAll } from "react-icons/md";
import { HiPlayPause } from "react-icons/hi2";
import { LanguageContext } from "../../context";
import Video from "../../components/Video";
import Actors from "../Actor";
import mov from "../../img/mov.jpg";

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const { language, dark, favorite, setFavorite } = useContext(LanguageContext);
  const [win, setWin] = useState(false);
  const [bg, setBg] = useState(false);
  const [red, setRed] = useState(false);
  const { id } = useParams();
  function getDetails(key) {
    axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=${language}`
    ).then((res) => {
      setDetails(res.data);
    });
  }
  function item() {
    let task = JSON.parse(localStorage.getItem("fav")) || [];
    let newFav = {
      Name: { favorite },
    };
    let result = [...task, newFav];
    localStorage.setItem("fav", JSON.stringify(result));
  }
  
  let findHeart = favorite.some((el) => el.id === details.id);

  function getMov(date) {
    let findMovie = favorite.find((el) => el.id === date.id);
    if (findMovie) {
      let filteredMovies = favorite.filter((el) => el.id !== date.id);
      setFavorite(filteredMovies);
      // const [red, setRed] = useState(false);
    } else {
      setFavorite((prev) => [...prev, date]);
    }
  }
  useEffect(() => {
    getDetails(KEY_API);
  }, [language]);
  const {
    title,
    poster_path,
    backdrop_path,
    release_date,
    overview,
    runtime,
    vote_average,
    genres,
    production_countries,
    tagline,
  } = details;
  return (
    <div
      style={{
        background: dark ? "black" : "white",
        color: dark ? "white" : "black",
      }}
    >
      <div
        style={{
          background: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}) no-repeat `,
          filter: bg ? "blur(5px)" : "blur(0px)",
          zIndex: bg ? "3px" : "40px",
        }}
        id="details"
      >
        <div
          className="bgg"
          onClick={() => {
            setWin(false);
            setBg(false);
          }}
        ></div>
        <div className="container">
          <div className="details">
            {poster_path ? (
              <img
                className="details--img"
                onClick={() => {
                  setWin(!win);
                  setBg(!bg);
                }}
                src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`}
                alt="img"
                style={{
                  cursor: "pointer",
                }}
              />
            ) : (
              <img
                onClick={() => {
                  setWin(!win);
                  setBg(!bg);
                }}
                style={{
                  width: "300px",
                  height: "430px",
                  objectFit: "cover",
                }}
                src={mov}
                alt="img"
              />
            )}
            <div className="details--text">
              <h1>
                {title} <span>({release_date?.slice(0, 4)})</span>
              </h1>
              <div className="details--text__dat">
                <h5>{release_date}</h5>
                <GoDotFill />
                {production_countries?.map((el, idx) => (
                  <h2 key={idx}> {el.iso_3166_1}</h2>
                ))}
                <GoDotFill />
                {genres?.map((el, idx) => (
                  <h2 key={idx}>{el.name}, </h2>
                ))}
                <GoDotFill />
                <h5>
                  {Math.floor(runtime / 60)}h {Math.floor(runtime % 60)}m
                </h5>
              </div>
              <div className="details--text__rat">
                <div className="details--text__rat--circle">
                  {Math.round(vote_average)}0%
                </div>
                <h2>Рейтинг</h2>
                <div className="details--text__rat--circles">
                  <TfiMenuAlt />
                </div>
                <div
                  className="details--text__rat--circles"
                  onClick={() => {
                    getMov(details);
                    // item(details);
                    // setRed(!red);
                    // item(setRed(!red))
                  }}
                >
                  <FaHeart
                    style={{
                      color: findHeart ? "red" : "white",
                    }}
                  />
                </div>
                <div className="details--text__rat--circles">
                  <FaStar />
                </div>
                <div className="details--text__rat--circles">
                  <MdOutlineReplyAll />
                </div>
                <h2>
                  <HiPlayPause />
                </h2>
                <h3>Воспроизвести трейлер</h3>
              </div>
              <i>{tagline}</i>
              {/* <h1>Обзор</h1> */}
              <h4>{overview}</h4>
            </div>
          </div>
        </div>
      </div>
      <div
        className="window"
        style={{
          display: win ? "flex" : "none",
          zIndex: bg ? "99px" : "46px",
          filter: bg ? "blur(0)" : "none",
        }}
      >
        <img
          src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`}
          alt="img"
        />
        <h2>{title}</h2>
      </div>
      <Actors />
      <Video id={id} />
    </div>
  );
};

export default MovieDetails;
