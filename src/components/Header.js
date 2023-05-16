import React from "react";
import "./Header.css";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <div className="catalog-container">
      <div className="catalog-content">
        <h1 className="catalog-title">Individual Learners Catalog</h1>
        <p className="catalog-description">
          Transform your career with our comprehensive catalog of online
          courses and Nanodegree programs, starting at{" "}
          <span className="price">$399/mo.</span> 
        </p>
        <button className="catalog-button">Explore Now</button>
      </div>
      <div className="catalog-icon">
        <FontAwesomeIcon icon={faGraduationCap} />
      </div>
    </div>
  );
}

export default Header;
