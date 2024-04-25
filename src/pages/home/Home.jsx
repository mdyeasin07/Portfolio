import React from 'react';
import './home.css';
import Profile from '../../assets/home.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>Md. Yeasin 🖐️ </span>
            Web Developer
          </h1>

          <p className="home__description">
            {' '}
            As a dedicated web developer, I specialize in creating user-centric
            websites that make a lasting impact. With expertise in front-end
            technologies such as React JS and some backend proficiency in Node
            JS. I'm ensure seamless functionality across all devices, enhancing
            user experiences significantly.
          </p>
          <Link to="/about" className="button">
            More about me{' '}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
};

export default home;
