import React, { useState, useEffect } from 'react';
import './CategorySlide.css';


const CategorySlide = () => {

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

  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  // Duplicate categories array and concatenate it with itself to make the loop seamless
  const categoriesDup = [...datax, ...datax];

  const handlePrevCategory = () => {
    setCurrentCategoryIndex(
      currentCategoryIndex === 0 ? datax.length - 1 : currentCategoryIndex - 1
    );
  };

  const handleNextCategory = () => {
    setCurrentCategoryIndex(
      currentCategoryIndex === datax.length - 1 ? 0 : currentCategoryIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextCategory();
    }, 5000); // Change the interval time as per your preference
    return () => clearInterval(interval);
  }, [currentCategoryIndex]);

  return (
    <>
      <h1 className="course-categories-heading">Explore All Courses</h1>
    <div className="course-categories">
      <div className="course-categories-slider">
        <div
          className="course-categories-slider-inner"
          style={{
            width: `calc(100% * ${datax.length * 2})`,
            transform: `translateX(calc(-${currentCategoryIndex} * (100% / ${datax.length * 2})))`
          }}
          data-current-slide="0"
        >
          {categoriesDup.map((category, index) => (
          <a 
          key={`${category.name}-${index}`}
          href={`/category/${category.id}`}
          className="course-categories-card"
          style={{ marginLeft: index >= datax.length ? 0 : '10px', textDecoration:"none"}}
        >
          <img src={category.image} alt={category.name} />
          <h2 style={{ textDecoration: "none", color: "black" }}>{category.name}</h2>

        </a>
          ))}
        </div>
        <button className="course-categories-slider-prev" onClick={handlePrevCategory}>
          &lt;
        </button>
        <button className="course-categories-slider-next" onClick={handleNextCategory}>
          &gt;
        </button>
      </div>
    </div>
    </>
  );
};

export default CategorySlide;
