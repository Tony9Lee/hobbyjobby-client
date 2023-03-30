import React from "react";
import { Slider } from "infinite-react-carousel";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import "./Gig.scss";

function Gig() {
  const { id } = useParams();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">HOBBY LOBBY | GRAPHICS & DESIGN</span>
          <h1>{data.title}</h1>

          <div className="user">
            <img
              className="pp"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span>Jane Doe</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            {data.images.map((img) => (
              <img key={img} src={img} alt="" />
            ))}
          </Slider>
          <h2>About This Gig</h2>
          <p>{data.desc}</p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img
                className="pp"
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="info">
                <span>Jane Doe</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
                My name is Jane and I have a decade of experience as an artist.
                I enjoy creating AI generated art in my spare time. I have a lot
                of experience using the AI program and the tools that are needed
                to prompt the AI to deliver an incredible result. Please allow
                me to help you create breath taking images for your business,
                social, and even your home!
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                I just want to stay that art_with_ai was the first, and after
                this level of work, the only artist I'll be using on HobbyJobby.
                Communication was effortless, each day she sent me images that I
                was to free to make requests for changes. She listened,
                understood, and delievered way beyond my expectations. I
                absolutely would recommend this gig and should know that I'll be
                using them very soon!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Chad Rock</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                I just want to stay that art_with_ai was the first, and after
                this level of work, the only artist I'll be using on HobbyJobby.
                Communication was effortless, each day she sent me images that I
                was to free to make requests for changes. She listened,
                understood, and delievered way beyond my expectations. I
                absolutely would recommend this gig and should know that I'll be
                using them very soon!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                I just want to stay that art_with_ai was the first, and after
                this level of work, the only artist I'll be using on HobbyJobby.
                Communication was effortless, each day she sent me images that I
                was to free to make requests for changes. She listened,
                understood, and delievered way beyond my expectations. I
                absolutely would recommend this gig and should know that I'll be
                using them very soon!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                I just want to stay that art_with_ai was the first, and after
                this level of work, the only artist I'll be using on HobbyJobby.
                Communication was effortless, each day she sent me images that I
                was to free to make requests for changes. She listened,
                understood, and delievered way beyond my expectations. I
                absolutely would recommend this gig and should know that I'll be
                using them very soon!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>{data.shortTitle}</h3>
            <h3>$ {data.price}</h3>
          </div>
          <p>{data.shortDesc}</p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>2 Days Delivery</span>
              <div className="item">
                <img src="/img/recycle.png" alt="" />
                <span>3 Revisions</span>
              </div>
            </div>
            <div className="features">
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Prompt Writing</span>
              </div>
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Prompt Writing</span>
              </div>
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Prompt Writing</span>
              </div>
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Prompt Writing</span>
              </div>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Gig;
