import React, { useEffect, useState } from 'react';
import './CoursePage.css'
import Features from './Features';
import { Link, useParams } from 'react-router-dom';
const CoursePage = () => {
  const {courseid} = useParams();
  const [datax, setDatax] = useState([]);

  const fetchData = async () => {
    const res = await fetch('/main/course/'+courseid, {
      method: 'GET',
    });
    const data = await res.json();
    setDatax(data);
  };

  useEffect(() => {
    fetchData();
  }, []); 
  return (
    <>
    <div className="course-page">
      <div className="bg-image"></div>
      <div className="course-detail">
        <h1 className="course-name">{datax.name}</h1>
        <p className="course-desc">{datax.description}</p>
        <Link to={`/lesson/`+courseid} className="go-to-course">
  Go to Course
</Link>
      </div>
      <div className="course-infor">
        <div className="course-info-item">
          <p>Estimated Time</p>
          <p>{datax.duration}</p>
        </div>
        <div className="course-info-item">
          <p>Skill Level</p>
          <p>{datax.skill_covered}</p>
        </div>
        <div className="course-info-item">
          <p>Skills</p>
          <p>{datax.prereqquisites}</p>
        </div>
      </div>
    </div>
    <Features/>
    </>
  );
};

export default CoursePage;
