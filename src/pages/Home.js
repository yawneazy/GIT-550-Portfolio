import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom'; 
import portrait from '../images/homepic.jpg';
import sagaVThumb from '../images/sagaVthumbnail.png';

const Home = () => {
    return (
      <div>
         <div className="home-header">Hi, I'm Alyssa Olson</div> 
        
              <div className="home-header2"> 
              <span className="developer">
                    <Link to="/work">Developer</Link>
                </span>,
                <span className="designer">
                    <Link to="/work"> designer</Link>
                </span>, 
                <span className="musician">
                    <Link to="/play"> musician</Link></span> and 
              <span class="artist"> <Link to="/play"> artist</Link></span>.
              </div>
              <div className="home-main">
              <div className="home-content">I’m Alyssa, a Software and UI/UX Engineer with a BA in Music, 
              a BS in Computer Science, and an MS in UX. My unique journey 
              helped shape who I am today: creativity and flow from music, 
              coding and problem-solving skills from CS, and user-focused design from UX. 
              I’m a jack of most trades, building applications that help users and create 
              meaningful experiences.</div>

              <img src={portrait} alt="Profile pic" className="portrait-photo" />
              {/* <div class="home-content">I'm currently working as a Front End Developer in Tucson, AZ, focusing on UI/UX design. 
              I’m passionate about the work I do and the people I collaborate with, which is why I’m pursuing 
              an MS in User Experience at ASU. </div>*/}
              </div>

              <div className="case-studies-section">
                <h2>Case Studies</h2>
                <div className="case-studies-grid">
                  {/* Example case study card */}
                  <div className="case-study-card">
                    <img src={sagaVThumb} alt="Saga V" />
                    <h3>Saga V: Leading Design Team for a Mocktail Website</h3>
                    <Link to="/work/case-study-1">View Full Case Study</Link>
                  </div>

                  {/* Add more cards here in the future */}
                </div>
                </div>
      </div>
    );
  };

export default Home;