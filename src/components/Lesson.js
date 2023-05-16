import './Lesson.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css';
import { useParams } from 'react-router-dom';
import 'video-react/dist/video-react.css';
import { Player, ControlBar, ReplayControl, ForwardControl, CurrentTimeDisplay, TimeDivider, PlaybackRateMenuButton, VolumeMenuButton, BigPlayButton } from 'video-react';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';

function Lesson() {
  const [showTranscript, setShowTranscript] = useState(false);
  const toggleTranscript = () => {
    setShowTranscript(!showTranscript);
  };
  const { courseid } = useParams();
  // const [selectedData, setSelectedData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [datax, setDatax] = useState([]);
  const [videoKey, setVideoKey] = useState(0);
  const [datax2, setDatax2] = useState([]);
  const [videodata, setvideodata] = useState("http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4");
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handlelesson = (e) => {
    const selectedData2 = datax2.find((underData) => underData.name.toString() === e);
    if (selectedData2) {
      setvideodata(selectedData2);
      setVideoKey((prevKey) => prevKey + 1); 
    }
    console.log("this is video")
    console.log(videodata)
  };

  const fetchData = async () => {
    const res = await fetch('/main/lesson/', {
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
      (underData) => underData.course.toString() === courseid
    );
    if (selectedData.length > 0) {
      setDatax2(selectedData);
    }
  }, [datax]);

  console.log("Hello");
  console.log(datax2);
  // console.log(datax2[0].video)
  return (
    <div className="lesson-page">
      <div>
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          <button className="toggle-btn" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBarsStaggered} />
          </button>
          <div className="sidebar-content">
            {datax2.map((course) => (
              <div onClick={() => handlelesson(course.name)} className="course-video" key={course.id}>
                <FontAwesomeIcon icon={faCirclePlay} />
                <span className="video-title">{course.name}</span>
              </div>
            ))} 
          </div>
        </div>
      </div>
      <div style={{ position: 'relative', height:"100%", width:"80%", marginLeft:"2rem"}}>
      <Player key={videoKey} poster="/assets/poster.png"  width="70%">
      <BigPlayButton position="center" />
      <source src={videodata.video} />
        

        <ControlBar>
          <ReplayControl seconds={10} order={1.1} />
          <ForwardControl seconds={30} order={1.2} />
          <CurrentTimeDisplay order={4.1} />
          <TimeDivider order={4.2} />
          <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
          <VolumeMenuButton />
          <button style={{backgroundColor:"transparent", marginLeft:"1rem", boxShadow:"none"}} onClick={toggleTranscript}><FontAwesomeIcon icon={faFileLines} style={{color:"white"}}/></button>
        </ControlBar>
      </Player>
      {showTranscript && (
        <div style={{ 
            position: 'relative', 
            backgroundColor: 'white', 
            padding: '1rem', 
            border: '1px solid black', 
            zIndex: 2, 
            maxHeight: '11.5rem', 
            overflowY: 'auto' 
          }}>
          <p>{videodata.transcript}</p>
        </div>
      )}
    </div>
    </div>
  );
}

export default Lesson;
