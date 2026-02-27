import './HomeLayeredClouds.css';
import React, { useEffect } from 'react';
import RightCloudsPurple from '../../../img/HomeComponentImages/Large-Clouds-Purple-Right.png';
import RightCloudsBlue from '../../../img/HomeComponentImages/Large-Clouds-Blue-Right.png';
import RightCloudsPink from '../../../img/HomeComponentImages/Large-Clouds-Pink-Right.png';
import LeftCloudsPink from '../../../img/HomeComponentImages/Small-Clouds-Pink-Left.png';
import LeftCloudsBlue from '../../../img/HomeComponentImages/Small-Clouds-Blue-Left.png';
// import BirdPNG from '../../../img/HomeComponentImages/Bird.png';

const HomeLayeredClouds = () => {
  useEffect(() => {
    const images = document.querySelectorAll('[class*="cloud"]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
          } else {
            entry.target.classList.remove("slide-in");
            entry.target.classList.add("slide-out");
          }
        });
      },
      {
      threshold: 0.1, //percent of object visible before triggering
      rootMargin: "50px 50px 50px 50px",
      }
    );

    images.forEach((image) => observer.observe(image));

    return () => observer.disconnect();
  }, []);


  return (
    <div className="cloud-layered d-block w-100 flex-center-content flex-column">
      <img src={LeftCloudsBlue} className="cloud cloud-left" alt="Layer 1" />
      <img src={LeftCloudsPink} className="cloud cloud-left" alt="Layer 2" />
      <img src={RightCloudsPurple} className="cloud cloud-right" alt="Layer 3" />
      <img src={RightCloudsBlue} className="cloud cloud-right" alt="Layer 4" />
      <img src={RightCloudsPink} className="cloud cloud-right" alt="Layer 5" />
    </div>
  );    
}

export default HomeLayeredClouds;