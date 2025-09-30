import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from '../MainRouter';
import ScrollToTop from '../components/ScrollToTop';

function App() {
  const [theme, setTheme] = useState('default');

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainRouter setTheme={setTheme} />
    </BrowserRouter>
  );
}

export default App;