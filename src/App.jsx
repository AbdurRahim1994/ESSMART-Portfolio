import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Experience from './components/Experience.jsx';
import Feedback from './components/Feedback.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Project from './components/Project.jsx';
import Skill from './components/Skill.jsx';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Skill" element={<Skill />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Feedback" element={<Feedback />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App
