import React from "react";
import "./Featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Find the Perfect Person to Freelance Business Services</h1>
          <div className="search">
            <div className="searchInput">
              <img src="" alt="" />
              <input type="text" placeholder='Try "Building a Mobile App!"' />
            </div>
            <button>Search</button>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Featured;
