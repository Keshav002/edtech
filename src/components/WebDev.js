import React, { useEffect, useState } from 'react';
import Card from './Card';
import './WebDev.css';

function WebDev() {
  const [datax, setDatax] = useState([]);

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

  return (
    <div className="card-group">
      {datax.map((item) => (
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

export default WebDev;
