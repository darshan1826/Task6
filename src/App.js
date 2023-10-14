import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="portfolio">
      <header>
        <h1>Your Name</h1>
        <p>Darshan jadhao </p>
      </header>
      <section>
        <h2>About Me</h2>
        <p>I'm a passionate web developer from Maharashtra, pursuing a B.Tech in Computer Science at Vellore Institute of Technology. My journey into coding began with HTML and CSS, evolving into a diverse skill set. I thrive on staying up-to-date with the latest web development trends and technologies. My academic journey and active participation in coding competitions have equipped me with a strong foundation and problem-solving mindset. Beyond coding, I'm a culture enthusiast and a lover of Maharashtra's cuisine. I'm excited about the limitless possibilities in web development and am always eager to collaborate and create exceptional digital experiences. Let's innovate together!</p>
      </section>
      <section>
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>Description of Project 1</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Description of Project 2</p>
        </div>
      </section>
      <section>
        <h2>Contact</h2>
        <p>Darshan.jadhao2021@vitstudent.ac.in</p>
        <p>9373287505</p>
      </section>
    </div>
  );
};

export default App;
