import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import WebDev from './components/WebDev';
import CoursePage from './components/CoursePage';
import Lesson from './components/Lesson';
import Faq from './components/Faq';
import  Category  from './components/Category';


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webdev" element={<WebDev />} />
        <Route path="/coursepage/:courseid" element={<CoursePage />} />
         <Route path="/lesson/:courseid" element={<Lesson />} />
         <Route path="/category/:catid" element={<Category />} />
         <Route path="/faq" element={<Faq />} /> 
         
       
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
