import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './src/About.jsx';
import Contact from './src/Contact.jsx';
import Project from './src/Project.jsx';
import Education from './src/Education.jsx';
import Services from './src/Services.jsx';
import Layout from './components/Layout.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

const MainRouter = ({ setTheme }) => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout setTheme={setTheme} />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/education" element={<Education />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRouter;