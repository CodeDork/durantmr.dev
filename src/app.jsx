import ReactDOM from 'react-dom';
import React from 'react';
import './styles.css'; // Make sure to link your styles
import App from './App';
import './index.css'; // Import your CSS file

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

const Header = () => (
  <header className="bg-blue-600 text-white p-4">
    <h1 className="text-3xl font-bold">Durant's Portfolio</h1>
  </header>
);

const Nav = () => (
  <nav className="bg-blue-500 text-white p-4">
    <ul className="flex space-x-4">
      <li><a href="#about" className="hover:underline">Hello</a></li>
      <li><a href="#projects" className="hover:underline">Projects</a></li>
      <li><a href="#contact" className="hover:underline">Contact</a></li>
    </ul>
  </nav>
);

const About = () => (
  <section id="about" className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">About Me</h2>
    <p className="text-lg">
      I'm Durant, a passionate software developer. I specialize in full-stack web development and have a deep passion for building scalable applications. I am proficient in MySQL, Python, C++, and Amazon Web Services (AWS) Foundational Products, with years of experience in data analysis, software development, and cloud computing. I am skilled in using data-driven decision-making, building scalable applications, and implementing automation in cloud environments. Experienced in developing solutions that improve operational efficiency and data accuracy. I am passionate in pursuing Information Technology - Computer Programming and getting hands-on experience in data structures, database management, and web development.
    </p>
  </section>
);

const Projects = () => (
  <section id="projects" className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h3 className="text-xl font-bold mb-2">Project Title</h3>
        <p>Project description...</p>
      </div>
      {/* Repeat above block for each project */}
    </div>
  </section>
);

const Contact = () => (
  <section id="contact">
    <h2 className="text-2xl font-semibold mb-4">Contact</h2>
    <form className="max-w-lg mx-auto">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="email">Your Email</label>
        <input className="w-full p-3 border border-gray-300 rounded-md" type="email" id="email" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="message">Your Message</label>
        <textarea className="w-full p-3 border border-gray-300 rounded-md" id="message"></textarea>
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md">Send Message</button>
    </form>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white text-center p-4">
    <p>© 2025 Durant's Portfolio</p>
  </footer>
);

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <Nav />
      <main className="flex-grow p-6">
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
