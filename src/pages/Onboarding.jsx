import React from "react";
import { Link } from "react-router-dom";
import "./Onboarding.css";
import logo from "../assets/logo.png";

const Onboarding = () => {
  return (
    <div className="onboarding">
      <div className="onboarding__content">
        <img src={logo} alt="Queue-Less" className="onboarding__logo" />
        <h1 className="onboarding__title">Queue-Less</h1>
        <p className="onboarding__tagline">
          place an order in just a few taps!
        </p>

        <div className="onboarding__dots">
          <span className="onboarding__dot onboarding__dot--active" />
          <span className="onboarding__dot" />
          <span className="onboarding__dot" />
        </div>

        <Link to="/login" className="onboarding__continue">
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Onboarding;