import React, { useState } from "react";
import "./SelfDefence.css";

const techniques = [
  {
    img: "https://i.pinimg.com/736x/58/4f/c0/584fc074244c981a87f527741f6fecf0.jpg",
    text: "A palm strike is a quick, powerful hit using the heel of your hand to disable an attacker.",
    title: "Palm Strike",
  },
  {
    img: "https://www.sheknows.com/wp-content/uploads/2018/08/gfd03vsplebet1yqmsk2.jpeg?w=735",
    text: "Knee strikes in martial arts are powerful, close-range attacks that use the knee to hit an opponent.",
    title: "Knee Strike",
  },
  {
    img: "https://www.sheknows.com/wp-content/uploads/2018/08/hqebvndkcynozykwyps1.jpeg?w=735",
    text: "Elbow strikes are powerful, close-range attacks that target vital areas like the face and ribs.",
    title: "Elbow Strike",
  },
];

const videos = [
  {
    id: "K5UO9zA3GK4",
    title: "Palm Strike Tutorial",
    thumbnail: "https://img.youtube.com/vi/K5UO9zA3GK4/mqdefault.jpg",
  },
  {
    id: "7XI1uAdr_s4",
    title: "Elbow Strike Tutorial",
    thumbnail: "https://img.youtube.com/vi/7XI1uAdr_s4/mqdefault.jpg",
  },
  {
    id: "fji463dsZXo",
    title: "Knee Strike Tutorial",
    thumbnail: "https://img.youtube.com/vi/fji463dsZXo/mqdefault.jpg",
  },
  {
    id: "sY-P5GBwggU",
    title: "Escape from Wrist Grab",
    thumbnail: "https://img.youtube.com/vi/sY-P5GBwggU/mqdefault.jpg",
  },
  {
    id: "K5UO9zA3GK4",
    title: "Palm Strike Tutorial",
    thumbnail: "https://img.youtube.com/vi/K5UO9zA3GK4/mqdefault.jpg",
  },
  {
    id: "K5UO9zA3GK4",
    title: "Palm Strike Tutorial",
    thumbnail: "https://img.youtube.com/vi/K5UO9zA3GK4/mqdefault.jpg",
  },
  {
    id: "K5UO9zA3GK4",
    title: "Palm Strike Tutorial",
    thumbnail: "https://img.youtube.com/vi/K5UO9zA3GK4/mqdefault.jpg",
  }
];

const Card = ({ img, text, title }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className={`card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="card-inner">
        <div className="card-front">
          <img src={img} alt="Self Defense Move" />
          <h3>{title}</h3>
        </div>
        <div className="card-back">{text}</div>
      </div>
    </div>
  );
};

const VideoCard = ({ video, onClick }) => {
  return (
    <div className="video-card" onClick={onClick}>
      <div className="video-thumbnail">
        <img src={video.thumbnail} alt={video.title} />
        <div className="play-button">▶</div>
      </div>
      <h3>{video.title}</h3>
    </div>
  );
};

const VideoModal = ({ videoId, onClose }) => {
  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <iframe
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

const SelfDefenseSection = () => {
  const [selectedMove, setSelectedMove] = useState("palm");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const playInstruction = () => {
    if (!window.speechSynthesis) {
      alert("Your browser does not support voice synthesis.");
      return;
    }
    let speech = new SpeechSynthesisUtterance();
    let instructions = {
      palm: "Step one: Raise your dominant hand with an open palm. Step two: Strike the attacker's nose or chin with force.",
      elbow: "Step one: Raise your elbow and aim at the attacker's chin. Step two: Use your body weight to generate power in the strike.",
      knee: "Step one: Grab the attacker and balance yourself. Step two: Drive your knee into their stomach or groin for maximum impact.",
      escape: "Step one: Rotate your wrist toward the attacker’s thumb. Step two: Pull away with force and step back into a defensive stance.",
    };
    speech.text = instructions[selectedMove];
    speech.rate = 0.9;
    speech.pitch = 1.2;
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="self-defense-section">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Empower Yourself with Self-Defense</h1>
        <p>
          "Self-defense is not just a set of techniques; it's a state of mind.
          Stay aware, stay strong."
        </p>
      </div>

      {/* Card Section */}
      <h2>🔥 Self-Defense Techniques</h2>
      <div className="card-container">
        {techniques.map((tech, index) => (
          <Card key={index} img={tech.img} text={tech.text} title={tech.title} />
        ))}
      </div>

      {/* Video Section */}
      <h2>🎥 Video Demonstrations</h2>
      <div className="video-container">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            video={video}
            onClick={() => setSelectedVideo(video.id)}
          />
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal videoId={selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}

      {/* Voice Guide Section */}
      <h2>🔊 Voice-Guided Instructions</h2>
      <div className="voice-guide-container">
        <select
          onChange={(e) => setSelectedMove(e.target.value)}
          value={selectedMove}
        >
          <option value="palm">Palm Strike</option>
          <option value="elbow">Elbow Strike</option>
          <option value="knee">Knee Strike</option>
          <option value="escape">Escape from Wrist Grab</option>
        </select>
        <button onClick={playInstruction}>🔊 Play Instruction</button>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2023 Self-Defense Academy. All rights reserved.</p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a> |{" "}
          <a href="/contact">Contact Us</a>
        </p>
      </footer>
    </div>
  );
};

export default SelfDefenseSection;