import React, { useEffect, useState } from 'react';
import './Nav.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [datax, setDatax] = useState([]);
  const fetchData = async () => {
    const res = await fetch('/main/catogeries/', {
      method: 'GET',
    });
    const data = await res.json();
    setDatax(data);
  };

  useEffect(() => {
    fetchData();
  }, []); 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log(datax)
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-logo">
             iLearn
          </a>
          <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            <ul className="navbar-items">
              <li className="navbar-item has-dropdown">
                <a href="/" className="navbar-link">
                  Courses
                </a>
                <ul className="dropdown">
                {datax.map((item) => (
                  
                  <li className="dropdown-item">
                    <a href={"/category/"+item.id} className="dropdown-link">
                      {item.name}
                    </a>
                  </li>
                 
                  
                ))}
                </ul>
              </li>
              <li className="navbar-item">
                <a href="/" className="navbar-link">
                  About Us
                </a>
              </li>
              <li className="navbar-item">
                <a href="/" className="navbar-link">
                  Blog
                </a>
              </li>
              <li className="navbar-item">
                <a href="/faq" className="navbar-link">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
