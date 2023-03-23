import React from "react";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/Slide/Slide";
import { cards } from "../../data";
import "./Home.scss";
import CatCard from "../../components/catCard/CatCard";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A Whole World of Freelance Talent at your Fingertips!</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The Best for Every Budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Quality Work Done Quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Protected Payments, Safe Security
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 Support
            </div>
            <p>
              Our support staff is available at all hours and will ensure you
              the highest level of service.
            </p>
          </div>
          <div className="item">
            <video src="./img/vmvv3czyk2ifedefkau7.mp4" controls></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
