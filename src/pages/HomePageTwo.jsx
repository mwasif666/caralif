import React, { useEffect, useState } from "react";
import HeroTwo from "../components/HeroTwo";
import ServiceAreaTwo from "../components/ServiceAreaTwo";
import AboutTwo from "../components/AboutTwo";
import CounterTwo from "../components/CounterTwo";
import PortfolioTwo from "../components/PortfolioTwo";
import WhyChooseUsOne from "../components/WhyChooseUsOne";
import ProcessAreaTwo from "../components/ProcessAreaTwo";
import CTAAreaTwo from "../components/CTAAreaTwo";
import PricingPlanTwo from "../components/PricingPlanTwo";
import AppointmentAreaTwo from "../components/AppointmentAreaTwo";
import TeamAreaTwo from "../components/TeamAreaTwo";
import ClientAreaTwo from "../components/ClientAreaTwo";
import FaqAreaTwo from "../components/FaqAreaTwo";
import BlogAreaTwo from "../components/BlogAreaTwo";
import FooterAreaTwo from "../components/FooterAreaTwo";
import Preloader from "../helper/Preloader";
import VehicleSolutions from "../components/vehicleSolution";
import MarqueeOne from "../components/MarqueeOne";
import HeaderFour from "../components/HeaderFour";

const HomePageTwo = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 2000);
  }, []);
  return (
    <>
      {/* Preloader */}
      {active === true && <Preloader />}

      {/* Header Two */}
      <HeaderFour />

      {/* Hero Two */}
      <HeroTwo />

      {/* Service Area Two */}

      <VehicleSolutions />
      {/* Appointment Area Two */}
      <AppointmentAreaTwo />

      {/* Marquee One */}
      <MarqueeOne />
      <ServiceAreaTwo />

      {/* About Two */}
      {/* <div className="about-area-2 bg-smoke">
        <AboutTwo />
      </div> */}

      {/* Counter Two */}
      {/* <CounterTwo /> */}

      {/* Portfolio Two */}
      {/* <PortfolioTwo /> */}

      {/* Why Choose Us One */}
      {/* <WhyChooseUsOne /> */}

      {/* Process Area Two */}
      {/* <ProcessAreaTwo /> */}

      {/* CTA Area Two */}
      {/* <CTAAreaTwo /> */}

      {/* Pricing Plan Two */}
      {/* <PricingPlanTwo /> */}

      {/* Appointment Area Two */}
      {/* <AppointmentAreaTwo /> */}

      {/* Team Area Two */}
      {/* <TeamAreaTwo /> */}

      {/* Client Area Two */}
      <ClientAreaTwo />

      {/* Faq Area Two */}
      <FaqAreaTwo />

      {/* Blog Area Two */}
      <BlogAreaTwo />

      {/* Footer Area Two */}
      <FooterAreaTwo />
    </>
  );
};

export default HomePageTwo;
