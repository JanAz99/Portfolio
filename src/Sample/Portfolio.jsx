import React from 'react';
import './Style.css';
import Pic from "./Assets/janani.jpg";
import '@fontawesome/fontawesome-free/css/all.min.css';
import Pic1 from "./Assets/html.png";
import Pic2 from "./Assets/CSS.png";
import Pic3 from "./Assets/JS.png";
import Pic4 from "./Assets/React.png";
import UC from "./Assets/UC.png";
import BabyO from "./Assets/BabyO.png";
import FoodR from "./Assets/FoodR.png";
import Calc from "./Assets/Calc.png";
import VerticalTimeline from './VerticalTimeline';


const Portfolio = () => {
  return (
   <body style={{
      
    backgroundImage: 'url(https://i.pinimg.com/736x/ee/b0/84/eeb0841abe85d2500d0ab49e8e363d82.jpg)', 
    backgroundSize: 'cover',      
   backgroundPosition: 'center', 
   backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat'
  }}>



<div class="shape"  ></div>
    <header>
      <nav>
        <h1 style={{ marginTop: '10px' , color : 'rgb(163, 31, 220)' , fontSize : '40px',letterSpacing :'3px'}}>Janani R</h1>
        <div class="burger">
          <i class="fa-solid fa-bars"></i>
        </div>
        <ul class="links">
          
          <li style={{ marginTop: '10px' }}><a href="#about">about</a></li>
          <li style={{ marginTop: '10px' }}><a href="#projects">projects</a></li>
          <li style={{ marginTop: '10px' }}><a href="#contact">contact</a></li>
        </ul>
      </nav>
    </header>
    <main >
      <div class="container" >
        <div class="text">
          <div class="grp">
            <h2>Welcome to my profile</h2>
            <h1 className='neon'> 
              Hi, I'm <span>Janani Rajapandian</span> <br />
              A Front-End Developer
            </h1>
           
            

            <div class="icons">
              <a href="https://github.com/JanAz99">
                <i class="fa-brands fa-github"></i>
              </a>
              <div class="line"  ></div>
              <a href="https://www.linkedin.com/in/janani-r-83965b294/">
                <i class="fa-brands fa-linkedin-in" ></i>
              </a> <br/><br/><br/><br/>
             
          </div><br/> <br/>
          <div className='footer'>
            <a style={{ marginLeft: '105px' }} href="https://docs.google.com/document/d/182MoJyJkGbE2sC3Pb8UNpJSqTIlkHWXu/edit?usp=drive_link&ouid=102042342536467125407&rtpof=true&sd=true">Download Resume</a>
            </div>
            </div>
        </div>

        

        <div class="img"   >
          <img src= {Pic} alt="Pic"/>
        </div>
      </div>

      
    </main>
    
    <div class="about" id="about">
      <div class="container">
        <div class="text">
          <h3>About</h3>
          <h1>Get to know me</h1>
          <p>
            I'm Janani Rajapandian, a B.Tech engineering graduate specializing in web development, who loves
            spending the entire day learning and expermenting new stuffs and
            technologies.Throughout my journey in coding, I've delved into a multitude of projects, spanning from 
            basic to captivating website designs.
          </p>
        </div>
        <div class="skills">
          <h2>Skills</h2>
          <div class="wrapper">
            <div >
              {/* <i class="fa-brands fa-html5"></i> */}
              <img src= {Pic1} alt="Pic" style={{
          
          
          width: '100%',
          height: '100%', }}   />
            </div>
            <div>
            <img src= {Pic2} alt="Pic" style={{
          
          
          width: '100%',
          height: '100%', }}   />
            </div>
            <div>
            <img src= {Pic3} alt="Pic" style={{
          
          
          width: '100%',
          height: '100%', }}   />
            </div>
            <div>
            <img src= {Pic4} alt="Pic" style={{
          
          
          width: '100%',
          height: '100%', }}   />
            </div>
            <div>
              <i class="fa-brands fa-github"></i>
            </div>
            <div>
              <i class="fa-brands fa-git-alt" style={{ color: '#ce3636' }}></i>
            </div>
            <div>
              <i class="fa-brands fa-sass" style={{ color: '#63E6BE' }}></i>
            </div>
            <div>
            <i class="fa-brands fa-bootstrap" style={{ color: '#74C0FC' }}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br/><br/><br/>
        <div class="skills">
          <h3  style={{ marginLeft: '430px', fontSize :'50px', fontWeight:'800' , color : 'rgb(163, 31, 220)' }}>Experience</h3>

    <VerticalTimeline />
    </div>
    
    
 
    <div class="projects" id="projects"  >
      <div class="container">
        <h3>Portfolio</h3>
        <h1 class="title">A selection of Works I've done</h1>
        <div class="projects-wrapper">
          <div class="project">
            <div class="card">
              <div class="overview">
                <h1>Urban Chick (Women's Fashion)</h1>
                <div class="btns">
                  <a href="https://janaz99.github.io/Urbanchick/Urbanic%20Chick.html" >
                    <i class="fa-brands fa-github"></i>
                  </a>
                  <a href="project url" >
                    <i class="fa-solid fa-link"></i>
                  </a>
                </div>
              </div>
              <img src= {UC} alt="UC" />
            </div>
          </div>

          <div class="project">
            <div class="card">
              <div class="overview">
                <h1>Landing Page (Kindergarten Website)</h1>
                <div class="btns">
                  <a href="https://www.linkedin.com/feed/update/urn:li:activity:7209944625095016448/" >
                    <i class="fa-brands fa-github"></i>
                  </a>
                  <a href="project url">
                    <i class="fa-solid fa-link"></i>
                  </a>
                </div>
              </div>
              <img src= {BabyO}  />
            </div>
          </div>

          <div class="project">
            <div class="card">
              <div class="overview">
                <h1>Food4ever (Food Ordering Page)</h1>
                <div class="btns">
                  <a href="https://github.com/JanAz99/React-Projects" >
                    <i class="fa-brands fa-github"></i>
                  </a>
                  <a href="project url" >
                    <i class="fa-solid fa-link"></i>
                  </a>
                </div>
              </div>
              <img src= {FoodR}  />
            </div>
          </div>

          <div class="project">
            <div class="card">
              <div class="overview">
                <h1>Simple Interest Calculator(Using Javascript)</h1>
                <div class="btns">
                  <a href="https://www.linkedin.com/posts/activity-7219337622500884480-fFB9?utm_source=share&utm_medium=member_desktop" >
                    <i class="fa-brands fa-github"></i>
                  </a>
                  <a href="project url" >
                    <i class="fa-solid fa-link"></i>
                  </a>
                </div>
              </div>
              <img src= {Calc}  /> 
            </div>
          </div>

        </div>
      </div>
    </div> 
    

    

    <div class="contact" id="contact">
      <div class="container">
        <div class="header">
          <h3>Contact</h3>
          <h1>Reach me out via:</h1>
        </div>
        <div class="wrapper">
          <div class="grp">
            <i class="fa-solid fa-paper-plane"></i>
            <span>jansreeju@outlook.com</span>
          </div>
          <div class="grp">
            <i class="fa-solid fa-phone"></i>
            <span>+99 12 48 76 95</span>
          </div>
          <div class="grp">
            <i class="fa-brands fa-linkedin"></i>
            <span>@janani-r-83965b294</span>
          </div>
        </div>
        <div class="footer">
          <p>Let's talk about a project</p>
          <a href="mailto:@jansreeju@outlook.com">
            Hire Me <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>

    </body>

)
}

export default Portfolio
