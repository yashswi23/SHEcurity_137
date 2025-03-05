import React, { useState } from "react";
import "./SelfDefence.css"

const techniques = [
  {
    img: "https://i.pinimg.com/736x/58/4f/c0/584fc074244c981a87f527741f6fecf0.jpg",
    text: "A palm strike is a quick, powerful hit using the heel of your hand to disable an attacker.",
  },
  {
    img: "https://www.sheknows.com/wp-content/uploads/2018/08/gfd03vsplebet1yqmsk2.jpeg?w=735",
    text: "Knee strikes in martial arts are powerful, close-range attacks that use the knee to hit an opponent.",
  },
  {
    img: "https://www.sheknows.com/wp-content/uploads/2018/08/hqebvndkcynozykwyps1.jpeg?w=735",
    text: "Elbow strikes are powerful, close-range attacks that target vital areas like the face and ribs.",
  }
];

const videos = [
  "K5UO9zA3GK4",
  "7XI1uAdr_s4",
  "fji463dsZXo",
  "sY-P5GBwggU"
];

const Card = ({ img, text }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
      <div className="card-inner">
        <div className="card-front">
          <img src={img} alt="Self Defense Move" />
        </div>
        <div className="card-back">{text}</div>
      </div>
    </div>
  );
};

const SelfDefenseSection = () => {
  const [selectedMove, setSelectedMove] = useState("palm");
  
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
      <h2>🔥 Self-Defense Techniques</h2>
      <div className="card-container">
        {techniques.map((tech, index) => (
          <Card key={index} img={tech.img} text={tech.text} />
        ))}
      </div>
      
      <h2>🎥 Video Demonstrations</h2>
      <div className="video-container">
        {videos.map((id, index) => (
          <iframe
            key={index}
            width="300"
            height="200"
            src={`https://www.youtube.com/embed/${id}`}
            title={`Self Defense Video ${index + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ))}
      </div>
      
      <h2>🔊 Voice-Guided Instructions</h2>
      <div className="voice-guide-container">
        <select onChange={(e) => setSelectedMove(e.target.value)} value={selectedMove}>
          <option value="palm">Palm Strike</option>
          <option value="elbow">Elbow Strike</option>
          <option value="knee">Knee Strike</option>
          <option value="escape">Escape from Wrist Grab</option>
        </select>
        <button onClick={playInstruction}>🔊 Play Instruction</button>
      </div>
    </div>
  );
};

export default SelfDefenseSection;
