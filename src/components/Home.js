import React from 'react';
import Header from './Header';
import './Home.css';
import WebDev from './WebDev';
import CategorySlide from './CategorySlide';
function Home() {
  return (
    <div className='home-page'>
      <CategorySlide/>
        <Header/>
        <WebDev />
    </div>
  )
}

export default Home