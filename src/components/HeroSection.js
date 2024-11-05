import React, { useState } from 'react';
import './HeroSection.css';
import video from '../assets/video/PC.mp4'; 
import Form from '../components/Form'; // Import the Form component
import Modal from '../components/Modal'; // Import the Modal component

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleButtonClick = () => {
    setIsModalOpen(true); // Open the modal when the button is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <section className="hero-section">
      <div className="text-content">
        <h1 className="main-text">WE BUILD PEOPLE<br /> BEFORE WE <br /> BUILD PC</h1> 
        <p className="tagline">Crafting Your Ultimate Gaming Experience - Unleash Your Power! Smart people work with Smart Systems. Customize your Dream PC</p>
        <button className="build-button" onClick={handleButtonClick}>BUILD NOW</button>
      </div>
      <div className="video-container">
        <video src={video} autoPlay loop muted className="hero-video" />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Form /> {/* Render your Form inside the modal */}
      </Modal>
    </section>
  );
};

export default HeroSection;
