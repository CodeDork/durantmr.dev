import React from 'react';
import './styles.css';  // Make sure to link your styles

function App() {
  return (
    <div className="App">
      {/* Home Section */}
      <header className="header">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm [Your Name], a passionate developer.</p>
      </header>

      {/* About Me Section */}
      <section className="about" id="about">
        <h2>About Me</h2>
        <p>I am a web developer with experience in React, Node.js, and more.</p>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project">
            <h3>Project 1</h3>
            <p>Details about project 1</p>
          </div>
          <div className="project">
            <h3>Project 2</h3>
            <p>Details about project 2</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me via email at: [Your Email]</p>
      </section>
    </div>
  );
}

export default App;
