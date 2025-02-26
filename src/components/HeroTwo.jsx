import React from "react";
import { Link } from "react-router-dom";
import CarScroll from "./lightScroll";

const HeroTwo = () => {
  return (
    <div
      className="hero-wrapper hero-2"
      id="hero"
      style={{ backgroundImage: "url(assets/img/hero/hero_bg_2_1.png)" }}
    >
      <div className="hero-shape2-1">
        <span className="hero-shape2-2" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xxl-12 col-xl-12 col-lg-12">
            <div className="hero-style2">
              {/* <span className="sub-title text-white">Growth Accelerator</span> */}
              <h1 className="hero-title text-white">
                One Stop{" "}
                <span>
                  <img src="assets/img/hero/hero_shape_2.png" alt="Fixturbo" />{" "}
                  Vehicle
                </span>{" "}
                Solution
              </h1>
              {/* <p className="hero-text text-white">
                Vestibulum rhoncus nisl ac gravida porta. Mauris eu sapien
                lacus. Etiam molestie justo neque, in convallis massa tempus in.
              </p> */}
              {/* <div className="btn-group">
                <Link to="/about" className="btn">
                  Learn More
                </Link>
                <div className="call-media-wrap">
                  <div className="icon">
                    <img src="assets/img/icon/phone-1.svg" alt="Fixturbo" />
                  </div>
                  <div className="media-body">
                    <h6 className="title text-white">Requesting A Call:</h6>
                    <h4 className="link">
                      <Link className="text-white" to="tel:6295550129">
                        (629) 555-0129
                      </Link>
                    </h4>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-xxl-12 col-xl-12 col-lg-12">
            <CarScroll />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
