import axios from "axios";
import React, { useEffect, useState } from "react";
import { KEY_API } from "../../API";

const Video = ({ id }) => {
  const [vid, setVid] = useState([]);
  function getVideo(key) {
    axios(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`
    ).then((res) => {
      setVid(res.data.results);
    });
  }
  useEffect(() => {
    getVideo(KEY_API);
  }, []);
  console.log(vid);
  return (
    <div id="video">
      <div className="container">
        <div className="video">
          {vid.map((el) => (
            <iframe
              width="949"
              height="534"
              src={`https://www.youtube.com/embed/${el.key}`}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Video;
