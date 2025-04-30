import { useState, useRef } from 'react';
import '../styles/Projects.css';
import projectPreview from '../assets/images/SignieHOMEPAGE.png';

//video imports 
import harryPotterVideo from '../assets/videos/HarryPotter.mp4';
import sharkTankVideo from '../assets/videos/SharkTank.mp4';
import rsDipsVideo from '../assets/videos/rsDips.mp4';
import mmClinkVideo from '../assets/videos/mmClink.mp4';
import FannyPackVideo from '../assets/videos/FannyPack.mp4';
import FoodMGUniversalVideo from '../assets/videos/FoodMGUniversal.mp4';
import HPUniversalVideo from '../assets/videos/HPUniversal.mp4';
import IOAPhotosVideo from '../assets/videos/IOAPhotos.mp4';
import MGGatorUniversalVideo from '../assets/videos/MGGatorUniversal.mp4';
import MGMerchVideo from '../assets/videos/MGMerch.mp4';
import MummyTrendVideo from '../assets/videos/MummyTrend.mp4';
import PanchoVideo from '../assets/videos/Pancho.mp4';
import PhotosIOAVideo from '../assets/videos/PhotosIOA.mp4';
import BuyMMVideo from '../assets/videos/BuyMM.mp4';
import LoveMMPIVideo from '../assets/videos/LoveMMPI.mp4';
import LoveMMPIIVideo from '../assets/videos/LoveMMPII.mp4';
import RecapMMVideo from '../assets/videos/RecapMM.mp4';
import CelsiusIVideo from '../assets/videos/CelsiusI.mp4';
import CelsiusIIVideo from '../assets/videos/RSDribble.mp4';
import RSDribbleVideo from '../assets/videos/CelsiusII.mp4';
import RSTstopsVideo from '../assets/videos/RSTstops.mp4';
import RSZeroVideo from '../assets/videos/RSZero.mp4';

//photos import
import CatInHatPhoto from '../assets/images/CatInHat.jpeg';
import HulkCoasterPhoto from '../assets/images/HulkCoaster.jpeg';
import JurassicParkEntrancePhoto from '../assets/images/JurassicParkEntrance.jpeg';
import LazyRiverVBPhoto from '../assets/images/LazyRiverVB.jpeg';
import VBSplashPhoto from '../assets/images/VBSplash.jpeg';
import VelocicoasterPhoto from '../assets/images/Velocicoaster.jpeg';
import VelocicoasterTrackPhoto from '../assets/images/VelocicoasterTrack.jpeg';
import volcanoBaySplashPhoto from '../assets/images/volcanoBaySplash.jpeg';
import VolcanoBayUniversalPhoto from '../assets/images/VolcanoBayUniversal.jpeg';
import VolcanoBayViewPhoto from '../assets/images/VolcanoBayView.jpeg';
import zaxbrosPhoto from '../assets/images/zaxbros.jpeg';


function Projects() {

  const videoRefs = useRef([]);
  
  // which video is currently playing
  const [playingVideoIndex, setPlayingVideoIndex] = useState(null);

  //reel projects
  const reelProjects = [
    { 
      id: 1, 
      videoSrc: harryPotterVideo,
      title: "Harry Potter Campaign" 
    },
    { 
      id: 2, 
      videoSrc: sharkTankVideo,
      title: "Dreamworks Land Campaign" 
    },
    { 
      id: 3, 
      videoSrc: FannyPackVideo,
      title: "Fanny Pack Universal" 
    },
    { 
      id: 4, 
      videoSrc: FoodMGUniversalVideo,
      title: "Food MG Universal" 
    },
    { 
      id: 5, 
      videoSrc: HPUniversalVideo,
      title: "HP Universal" 
    },
    { 
      id: 6, 
      videoSrc: IOAPhotosVideo,
      title: "IOA Photos" 
    },
    { 
      id: 7, 
      videoSrc: MGGatorUniversalVideo,
      title: "MG Gator Universal" 
    },
    { 
      id: 8, 
      videoSrc: MGMerchVideo,
      title: "MG Merch" 
    },
    { 
      id: 9, 
      videoSrc: MummyTrendVideo,
      title: "Mummy Trend" 
    },
    { 
      id: 10, 
      videoSrc: PanchoVideo,
      title: "Pancho Universal" 
    },
    { 
      id: 11, 
      videoSrc: PhotosIOAVideo,
      title: "Photos IOA" 
    },

    { 
      id: 12, 
      videoSrc: rsDipsVideo,
      title: "Roller Skating Tutorial" 
    },
    { 
      id: 13, 
      videoSrc: mmClinkVideo,
      title: "Milk Mart Event" 
    },
    { 
      id: 14, 
      videoSrc: BuyMMVideo,
      title: "Buy MM" 
    },
    { 
      id: 15, 
      videoSrc: LoveMMPIVideo,
      title: "Love MM PI" 
    },
    { 
      id: 16, 
      videoSrc: LoveMMPIIVideo,
      title: "Love MM PII" 
    },
    { 
      id: 17, 
      videoSrc: RecapMMVideo,
      title: "Recap MM" 
    },
    { 
      id: 18, 
      videoSrc: CelsiusIVideo,
      title: "Celsius I" 
    },
    { 
      id: 19, 
      videoSrc: CelsiusIIVideo,
      title: "Celsius II" 
    },
    { 
      id: 20, 
      videoSrc: RSDribbleVideo,
      title: "RS Dribble" 
    },
    { 
      id: 21, 
      videoSrc: RSTstopsVideo,
      title: "RS Tstops" 
    },
    { 
      id: 22, 
      videoSrc: RSZeroVideo,
      title: "RS Zero" 
    },
  ];

  //photo projects

  const photoProjects = [
          { id: 1, image: CatInHatPhoto, title: "Nature Shot 1" },
          { id: 2, image: HulkCoasterPhoto, title: "Nature Shot 2" },
          { id: 3, image: JurassicParkEntrancePhoto, title: "Nature Shot 3" },
          { id: 4, image: LazyRiverVBPhoto, title: "Nature Shot 4" },
          { id: 5, image: VBSplashPhoto, title: "Nature Shot 4" },
          { id: 6, image: VelocicoasterPhoto, title: "Nature Shot 4" },
          { id: 7, image: VelocicoasterTrackPhoto, title: "Nature Shot 4" },
          { id: 8, image: volcanoBaySplashPhoto, title: "Nature Shot 4" },
          { id: 9, image: VolcanoBayUniversalPhoto, title: "Nature Shot 4" },
          { id: 10, image: VolcanoBayViewPhoto, title: "Nature Shot 4" },
          { id: 11, image: zaxbrosPhoto, title: "Nature Shot 4" }



        ];

  // video play/pause 
  const handleVideoPlay = (index) => {
    const video = videoRefs.current[index];
    
    if (video) {
      if (video.paused) {
        // pause other playing videos
        videoRefs.current.forEach((v, i) => {
          if (i !== index && v && !v.paused) {
            v.pause();
            setPlayingVideoIndex(null);
          }
        });
        
        // play this video
        video.play()
          .then(() => {
            setPlayingVideoIndex(index);
          })
          .catch(err => {
            console.log("Error playing video:", err);
          });
      } else {
        video.pause();
        setPlayingVideoIndex(null);
      }
    }
  };

  return (
    <div className="projects-container">
      <h1>Published Websites</h1>
      
      <div className="project-preview">
        <img src={projectPreview} alt="Project Preview" />
        <a href='https://signie.netlify.app/'>
          <button className="view-button">View SignIE</button>
        </a>
      </div>

      <div className="project-category">
        <h2>Publsihed Content Reels</h2>
        <div className="reels-grid">
          {reelProjects.map((reel, index) => (
            <div key={reel.id} className="reel-item">
              <div 
                className="reel-thumbnail video-container"
                onClick={() => handleVideoPlay(index)}
              >
                <video 
                  ref={el => videoRefs.current[index] = el}
                  className="reel-video" 
                  src={reel.videoSrc}
                  preload="metadata"
                  controls={playingVideoIndex === index}
                />
                {playingVideoIndex !== index && (
                  <div className="play-overlay">▶️</div>
                )}
              </div>
              <p className="reel-title">{reel.title}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="project-category">
        <h2>Published Photography</h2>
        <div className="project-grid">
          {photoProjects.map((photo) => (
            <div key={`photo-${photo.id}`} className="project-item">
              <img src={photo.image} alt={`Photo ${photo.id}`} />
              <p className="photo-title">{photo.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;