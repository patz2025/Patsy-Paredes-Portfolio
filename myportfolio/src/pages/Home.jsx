import { useState, useRef } from 'react';
import '../styles/Home.css';

// Import videos - you'll need to add these files to your assets folder
import harryPotterVideo from '../assets/videos/HarryPotter.mp4';
import sharkTankVideo from '../assets/videos/SharkTank.mp4';
import rsDipsVideo from '../assets/videos/rsDips.mp4';
import mmClinkVideo from '../assets/videos/mmClink.mp4';

// Import photography
import profileImage from '../assets/images/PatsysHeadshot.jpg';
import projectPreview from '../assets/images/SignieHOMEPAGE.png';
import CatInHatPhoto from '../assets/images/CatInHat.jpeg';
import HulkCoasterPhoto from '../assets/images/HulkCoaster.jpeg';
import JurassicParkEntrancePhoto from '../assets/images/JurassicParkEntrance.jpeg';
import LazyRiverVBPhoto from '../assets/images/LazyRiverVB.jpeg';

function Home() {
    const videoRefs = useRef([]);
    
    // Track which video is currently playing
    const [playingVideoIndex, setPlayingVideoIndex] = useState(null);

    const topReels = [
        { 
            id: 1, 
            videoSrc: harryPotterVideo,
            title: "Harry Potter Reel" 
        },
        { 
            id: 2, 
            videoSrc: sharkTankVideo, 
            title: "Dreamworks land Campaign" 
        },
        { 
            id: 3, 
            videoSrc: rsDipsVideo, 
            title: "Roller Skating Tutorial" 
        },
        { 
            id: 4, 
            videoSrc: mmClinkVideo, 
            title: "Milk Mart Event" 
        }
    ];

    const topPhotos = [
        { id: 1, image: CatInHatPhoto, title: "Nature Shot 1" },
        { id: 2, image: HulkCoasterPhoto, title: "Nature Shot 2" },
        { id: 3, image: JurassicParkEntrancePhoto, title: "Nature Shot 3" },
        { id: 4, image: LazyRiverVBPhoto, title: "Nature Shot 4" }
    ];

    const handleVideoPlay = (index) => {
        const video = videoRefs.current[index];
        
        if (video) {
            if (video.paused) {
                // Pause other videos
                videoRefs.current.forEach((v, i) => {
                    if (i !== index && v && !v.paused) {
                        v.pause();
                        setPlayingVideoIndex(null);
                    }
                });
                
                // Play video
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
        <div className="home-container">
            <div className="profile-section">
                <div className="profile-content">
                    <h1>I'm Patsy, a passionate digital media specialist with a love for blending brand strategy, creativity, and the latest trends.</h1>
                    <p className="subtitle">My focus is to deliver fresh & tech-forward solutions. Introducing your open to work.</p>
                    <div className="social-links">
                        <a href="https://www.instagram.com/patsyparedess/" className="social-icon">Instagram</a>
                        <a href="https://linkedin.com/in/patsy-paredes-968a89268/" className="social-icon">in</a>
                    </div>
                </div>
                <div className="profile-image">
                    <img src={profileImage} alt="Patsy Paredes" />
                </div>
            </div>
            
            <div className="recent-project">
                <h2>Most Recent Projects</h2>
                <div className="project-preview">
                    <img src={projectPreview} alt="Project Preview" />
                    <a href='https://signie.netlify.app/'>
                        <button className="view-button">View SignIE</button>
                    </a>
                </div>
            </div>

            <div className="content-section">
                <h2>CONTENT</h2>
                <div className="content-grid">
                    {topReels.map((reel, index) => (
                        <div key={reel.id} className="content-item">
                            <div 
                                className="content-thumbnail video-container"
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
                            <p className="content-title">{reel.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="content-section">
                <h2>PHOTOGRAPHY</h2>
                <div className="content-grid">
                    {topPhotos.map(photo => (
                        <div key={photo.id} className="content-item">
                            <div className="content-thumbnail">
                                <img src={photo.image} alt={photo.title} />
                            </div>
                            <p className="content-title">{photo.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;