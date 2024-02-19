import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { KEY_API } from "../../API";
import ActorsMovie from "../ActorsMovie";
import { LanguageContext } from "../../context";

const ActorDetails = () => {
  const [act, setAct] = useState({});
  const [open, setOpen] = useState(false);
  const {language} = useContext(LanguageContext)
  let { id } = useParams();
  function getActorDetails(key) {
    axios(
      `https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=${language}`
    ).then((res) => {
      setAct(res.data);
    });
  }
  function getBtn() {
    if (biography && biography.length > 400) {
      return (
        <button
          style={{
            display: open ? "none" : "block",
          }}
          onClick={() => {
            setOpen(true);
          }}
        >
          more...
        </button>
      );
    } else {
      // null;
    }
  }
  useEffect(() => {
    getActorDetails(KEY_API);
  }, [language]);
  console.log(act);
  let { name, biography, birthday, profile_path } = act;
  return (
    <>
      <div id="actorDetails">
        <div className="container">
          <div className="actorDetails">
            <img
              src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`}
              alt=""
            />
            <div className="actorDetails--text">
              <h1>{name}</h1>
              <h2>{birthday}</h2>
              <h3>
                {biography?.slice(0, 400)}
                {getBtn()}
              </h3>
              <h3
                style={{
                  display: open ? "block" : "none",
                }}
              >
                {biography?.slice(400)}
                <button
                  style={{
                    display: open ? "block" : "none",
                  }}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  hide...
                </button>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <ActorsMovie />
    </>
  );
};

export default ActorDetails;
