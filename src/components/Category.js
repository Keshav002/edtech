import React, { useEffect, useState } from 'react';
import Card from './Card';
import './WebDev.css';
import { useParams } from 'react-router-dom';

function Category() {
  const [datax, setDatax] = useState([]);
  const [datax2, setDatax2] = useState([]);
  const {catid} = useParams();
  const fetchData = async () => {
    const res = await fetch('/main/course/', {
      method: 'GET',
    });
    const data = await res.json();
    setDatax(data);
  };

  useEffect(() => {
    fetchData();
  }, []); 

  useEffect(() => {
    const selectedData = datax.filter(
      (underData) => underData.category.toString() === catid
    );
    if (selectedData.length > 0) {
      setDatax2(selectedData);
    }
  }, [datax, catid]);
console.log(datax2)
  return (
    <div className="card-group">
      {datax2.map((item) => (
        <Card
          key={item.id} // Add a unique key prop
          title={item.name}
          photo={item.image}
          description={item.description}
          level={item.difficulty}
          duration={item.duration}
          students={item.ratings}
          skills={item.skill_covered}
          prerequisites={item.prereqquisites}
          link = {"/coursepage/"+item.id}
        />
      ))}
    </div>
  );
}

export default Category;
