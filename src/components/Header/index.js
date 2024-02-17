import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  let [inputValue, setInputValue] = useState("");
  let nav = useNavigate();
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            width={200}
            alt="img"
          />

          <div className="header--nav">
            <Link to={"/"} href="#">
              Home
            </Link>
            <Link to={"/popular"} href="#">
              Popular
            </Link>
            <Link to={"/top_rated"} href="#">
              Top Rated
            </Link>
          </div>
          <select className="select" onChange={() => {}}>
            <option>RU</option>
            <option>EN</option>
          </select>
          <div className="header--search">
            <input
              type="text"
              // onInput={(e) => {
              //   nav(`/search/${e.target.value}`);
              // }}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              onClick={
                inputValue
                  ? () => {
                      nav(`/search/${inputValue}`);
                      setInputValue("");
                    }
                  : null
              }
            >
              search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
