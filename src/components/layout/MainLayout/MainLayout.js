import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({ children }) => {
  const [windowWidth, setwindowsWidth] = useState(window.innerWidth);
  const windowListener = () => {
    setwindowsWidth(window.innerWidth);
    console.log(windowWidth);
  };
  window.addEventListener('resize', windowListener);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
