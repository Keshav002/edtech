import React from "react";
import "./Card.css";
import { faCheck, faClock, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Card(props) {
  return (
    <div className="course-card">
      <img
        src={
          props.photo
        }
        alt={props.title}
        className="course-image"
      />
      <div className="course-info">
        <h2 className="course-title">{props.title}</h2>
        <p className="course-description">
        {props.description}
        </p>
        <ul className="course-details">
            <div className="icons">
          <li>
            <FontAwesomeIcon icon={faCheck} /> {props.level}
          </li>
          <li>
            <FontAwesomeIcon icon={faClock} /> {props.duration}
          </li>
          <li>
            <FontAwesomeIcon icon={faUsers} /> {props.students}
          </li>
          </div>
          <li>
            <strong>Skills covered:</strong>{props.skills}
          </li>
          <li>
            <strong>Prerequisites:</strong>{props.prerequisites}
          </li>
        </ul>
        <div className="course-buttons">
          <a href={props.link}>
            <button className="program-details-button">Program Details</button>
          </a>
          <a href={"https://d20vrrgs8k4bvw.cloudfront.net/documents/en-US/C%2B%2B+Nanodegree+Program+Syllabus.pdf"} target="_blank">
            <button className="download-syllabus-button">
              Download Syllabus
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
