import React from 'react';
import { Link } from 'react-router-dom';
import portrait from '../images/homepic.jpg';
import '../styles/About.css';

const About = () => {
  return (
    <div>
    <div className="about-container">
      <div className="about-text">
      <h1>About Me</h1>
      <p>I'm a former NCAA collegiate athlete and now a Software and UI/UX 
        Engineer with a BA in Music, a BS in Computer Science, and an MS in User Experience. 
        My journey has taken some unexpected turns, but each step shaped me into 
        a versatile creator, and a true jack of many trades.</p>

<p>Being a college athlete taught me discipline, mental strength and teamwork.
  Music sharpened my sense of creativity and introduced me to theory and mathematical 
  concepts that prepared me for Computer Science, even though I pursued it later. My 
  master's degree deepened my understanding of user needs and human-centered design. 
  Together with internships and professional roles, these experiences led me to my 
  perfect fit: Front-end Design and Development. Here, I get to blend creativity 
  with problem-solving, and collaborate with others to design, code, and build 
  applications that create meaningful user experiences.</p>

<p>Looking ahead, I plan on launching a custom website business to support local 
  businesses and projects that I care about. With my diverse background and passion 
  for human-centered design, I’m excited to keep growing and to build solutions that 
  make an impact.</p>
                 {/* <p>Although my journey has taken some unexpected turns,
                  it shaped me into a versatile creator. I’ve always been 
                  drawn to creativity, but turning that passion into a career 
                  wasn’t easy.
                  </p>
                  <p>
                  In 2018, I earned a BA in Music from Holy Names University 
                  while competing as an NCAA golfer, performing, and teaching 
                  music. My growing interest in technology led me to complete a 
                  BS in Computer Science at the University of Arizona in 2023.
                  </p>

                  <p>
                  Learning to code was challenging but incredibly rewarding. 
                  Through jobs and internships, I discovered my perfect fit: 
                  <b> Front-end Design and Development.</b> With this, I get to blend creativity with 
                  problem-solving to build mobile apps and websites.
                  </p>
    <p> I’m now finishing up my master’s degree in User Experience at ASU, and launching a 
      custom website business to support local businesses and projects I care about. 
      I’ve found my dream career and am excited for what’s ahead:)
</p> */}

     </div>
      {/* <div class="portrait-container"> */}
      <img src={portrait} alt="Profile pic" className="portrait-photo" />
      {/* </div> */}
    </div>
    <div className="home-link">
      <Link to="/">Go Home</Link>
      </div>
    </div>
  );
};

export default About;   
