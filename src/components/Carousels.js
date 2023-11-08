import React from "react";
import MultiCarousel from "react-multi-carousel"; // Renommez le Carousel de la bibliothèque
import "react-multi-carousel/lib/styles.css";
import  profile from "../assets/img/profil.jpg";
import  profile2 from "../assets/img/profil2.jpg";
import  profile3 from "../assets/img/profil3.jpg";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Carrousel = () => {
  return (
          <div>
            <h1 className="mb-5 mt-3 text-secondary">CLIENTS TESTIMONIALS</h1>
    <MultiCarousel responsive={responsive}>
      
      <div>
      <div className="profile-container">
        <img src={profile} alt="Photo de profil" className="profile-picture"/>
        <div className="profile-text ">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dicta recusandae aut odio assumenda voluptates esse at ad tenetu</p>
            <p className="fw-bold fs-2">Mohamed .</p>
            <p className="text-secondary">Marketing director</p>
            
        </div>
    </div>
      </div>
      
        <div className="profile-container">
        <img src={profile2} alt="Photo de profil" className="profile-picture"/>
        <div className="profile-text ">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dicta recusandae aut odio assumenda voluptates esse at ad tenetu</p>
            <p className="fw-bold fs-2">Abdou .</p>
            <p className="text-secondary">Chef Operating officier</p>
            
        </div></div>
      
      <div className="profile-container">
        <img src={profile3} alt="Photo de profil" className="profile-picture"/>
        <div className="profile-text ">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dicta recusandae aut odio assumenda voluptates esse at ad tenetu</p>
            <p className="fw-bold fs-2">Jennie S.</p>
            <p className="text-secondary">Bisiness Owner</p>
            
        </div>
      </div>
      
    </MultiCarousel>
    </div>
    
  );
};

export default Carrousel; // Exportez le composant sous le nom "Carrousel"