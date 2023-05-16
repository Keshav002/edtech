import React from "react";
import "./Features.css";
import { faLightbulb, faClock, faUsers, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Features() {
  return (
    <>
    <div className="feature-page">
      <h2 className="f-title">All our programs include:</h2>
    <div className="program-features">
      <div className="feature">
        <FontAwesomeIcon icon={faLaptopCode} className="icon" />
        <div className="feature-info">
          <h3 className="feature-title">Real-World Projects</h3>
          <p className="feature-description">
            With real-world projects and immersive content built in partnership
            with top-tier companies, you’ll master the tech skills companies want.
          </p>
        </div>
      </div>
      <div className="feature">
        <FontAwesomeIcon icon={faClock} className="icon" />
        <div className="feature-info">
          <h3 className="feature-title">Real-Time Support</h3>
          <p className="feature-description">
            On-demand help. Receive instant help with your learning directly in
            the classroom. Stay on track and get unstuck.
          </p>
        </div>
      </div>
      <div className="feature">
        <FontAwesomeIcon icon={faLightbulb} className="icon" />
        <div className="feature-info">
          <h3 className="feature-title">Career Services</h3>
          <p className="feature-description">
            You’ll have access to Github portfolio review and LinkedIn profile
            optimization to help you advance your career and land a high-paying
            role.
          </p>
        </div>
      </div>
      <div className="feature">
        <FontAwesomeIcon icon={faUsers} className="icon" />
        <div className="feature-info">
          <h3 className="feature-title">Flexible Learning Program</h3>
          <p className="feature-description">
            Tailor a learning plan that fits your busy life. Learn at your own
            pace and reach your personal goals on the schedule that works best
            for you.
          </p>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Features;
