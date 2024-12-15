import React from "react";
import BannerBackground from "../Assets/Light.png";
import BannerImage from "../Assets/Payment.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import foo from "../Assets/reus.png";


const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">

        <div className="home-text-section">
          <h1 className="primary-heading">
            Gatherly – Organisez<span className="line-break"></span> sans Limites
          </h1>
          <p className="primary-text">
            La plateforme ultime pour planifier, réserver et gérer des événements mémorables. Simplifiez chaque étape, des salles aux invités, avec Getherly.
          </p>
          
        </div>

        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
        <div className="home-banimg">
          <img src={foo} alt="" />          
        </div>
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default Home;