import 'video-react/dist/video-react.css';
import React, { useState } from 'react';
import { Player, ControlBar, ReplayControl, ForwardControl, CurrentTimeDisplay, TimeDivider, PlaybackRateMenuButton, VolumeMenuButton } from 'video-react';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Video = () => {
  const [showTranscript, setShowTranscript] = useState(false);

  const toggleTranscript = () => {
    setShowTranscript(!showTranscript);
  };

  return (
    <div style={{ position: 'relative', height:"100%", width:"80%", marginLeft:"2rem"}}>
      <Player poster="/assets/poster.png"  width="70%">
        <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />

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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quam minus dolore, iusto sed nam fuga nulla dolores, corporis, officia nisi nesciunt! Nam omnis neque assumenda mollitia quod pariatur. Corrupti fuga, alias eaque quibusdam enim omnis aut sapiente esse ducimus laborum facilis totam consequatur dolore veritatis delectus officiis quam nisi eligendi assumenda voluptates atque. Voluptas at rerum natus error ad voluptates facilis libero quis repellat ex, autem perferendis debitis distinctio earum esse amet magnam eius beatae, cumque fugit aliquid. Fuga sed inventore odio nesciunt porro ut corrupti, nobis, nemo recusandae deleniti natus! Eos nostrum illo expedita quia dolor? Animi, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam laboriosam est repellendus quia mollitia inventore accusamus omnis beatae odit molestiae, ratione iste, odio aliquam! Libero expedita iste magni molestiae at? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam omnis eveniet delectus sapiente suscipit qui officia modi quasi quo id rerum dicta adipisci a blanditiis totam in similique iusto numquam tempora, error itaque sed optio? Repellat optio, cumque eaque vel ad odit esse, porro earum nihil sed minus corporis neque, corrupti voluptates aperiam inventore obcaecati dolores! Expedita alias aut, eos, esse tenetur est molestias possimus mollitia, quod animi quo! Non ex id quae nesciunt animi velit necessitatibus magni recusandae voluptatum labore. Iste incidunt fuga quisquam ratione! Laboriosam ducimus, iure veniam molestias provident veritatis doloremque sapiente laborum qui ratione alias debitis.</p>
        </div>
      )}
    </div>
  );
};

export default Video;
