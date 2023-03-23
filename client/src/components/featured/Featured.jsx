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
          <div className="popular">
            <span>Popular</span>
            <button>Web Design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right"></div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Featured;
