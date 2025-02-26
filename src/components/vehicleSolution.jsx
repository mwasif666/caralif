import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./VehicleSolution.css";

const VehicleSolution = () => {
  const services = [
    { title: "Car Valuation", description: "Get the best price" },
    { title: "Find me a car", description: "Find new & used cars for sale" },
    { title: "Sell your Car", description: "Easiest way to sell cars" },
    {
      title: "Market trends & insights",
      description: "Latest Auto news, reports & tips",
    },
    { title: "Car Valuation", description: "Expert Valuation of Vehicles" },
    { title: "Expert Advice", description: "1 on 1 session with car experts" },
  ];

  return (
    <div className="container text-center my-5">
      <div className="title-area text-center">
        <span className="sub-title">Vehicle Solution</span>
        <h2 className="sec-title">
          One Stop Vehicle Solution{" "}
          <img
            className="title-bg-shape shape-center"
            src="assets/img/bg/title-bg-shape.png"
            alt="Fixturbo"
          />
        </h2>
      </div>

      <div className="row mt-4">
        {services.map((service, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="service-card service-card-custom ps-3 h-100 d-flex align-items-center">
              <div class="service-card_icon">
                <img
                  src="assets/img/icon/service-icon_1-1.svg"
                  alt="Fixturbo"
                />
              </div>
              <div className="ps-3 pt-2">
                <h5
                  className="service-title text-start fw-bold"
                  style={{
                    lineHeight: "00px",
                  }}
                >
                  {service.title}
                </h5>
                <p
                  className="service-description text-start text-muted"
                  style={{
                    lineHeight: "20px",
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleSolution;
