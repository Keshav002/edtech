import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
      <FontAwesomeIcon icon={faBarsStaggered} />
      </button>
      <div className="sidebar-content">
        {courses.map((course) => (
          <div className="course-video" key={course.id}>
            <FontAwesomeIcon icon={faCirclePlay} />
            <span className="video-title">{course.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
