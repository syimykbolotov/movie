import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { KEY_API } from "../../API";
import user from "../../img/user.jpg";
import { LanguageContext } from "../../context";

const Actors = () => {
  const [actor, setActor] = useState({});
  let { id } = useParams();
  const {language} = useContext(LanguageContext)
  function getAcc(key) {
    axios(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=${language}`
    ).then((res) => {
      setActor(res.data);
      //   console.log(res.data);
    });
  }
  useEffect(() => {
    getAcc(KEY_API);
  }, [language]);
  //   console.log(actor);
  let { cast, profile_path } = actor;
  return (
    <div id="actor">
      <div className="container">
        <h1>В главных ролях</h1>
        <div className="actor">
          {cast?.map((el) => (
            <div className="actor--block" key={el.id}>
              <Link to={`/actorDetails/${el.id}`}>
                {el.profile_path ? (
                  <img
                    src={`https://media.themoviedb.org/t/p/w276_and_h350_face${el.profile_path}`}
                    alt="img"
                  />
                ) : (
                  <img src={user} alt="img" width={250} height={349} />
                )}
              </Link>
              <h2>{el.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Actors;
