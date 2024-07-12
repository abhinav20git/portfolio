import React from "react";
import "./intro.css";
import bg from "../assets/me2.png";
import btnImg from "../assets/hireme.png";
import ABHINAVPANDEYresume from "../assets/ABHINAVPANDEYresume.pdf";
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Abhinav</span>
          <br />
          Frontend Developer
        </span>
        <span className="introPara">
          <p>
            I am a skilled frontend developer having commands over various tools
            and technologies.
          </p>
        </span>
        <div className="hire-res">
          {/* <Link> */}
          <a href="https://www.linkedin.com/in/abhinavpandey29">
            <button className="btn">
              <img src={btnImg} alt="btnImg" className="btnImg" />
              Hire Me
            </button>
            </a>
          {/* </Link> */}
          <div>
          <a href={ABHINAVPANDEYresume} className="res">
              
            <button className="btn " >Resume
            </button>
            </a>
            </div>
        </div>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
