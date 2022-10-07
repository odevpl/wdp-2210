import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MenuBar = ({ children }) => {
  const [addClass, setaddClass] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    setaddClass(addClass => !addClass);
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <nav className={styles.navbar + ' row align-items-center'}>
          <div className={'col-lg-6 ' + styles.searchDiv}>
            <ProductSearch />
          </div>
          <a onClick={handleClick} href='#' className={styles.toggle_button}>
            <FontAwesomeIcon icon={faBars} />
          </a>
          <div
            className={clsx(
              'col-lg-6 ' + styles.menu,
              addClass && styles.active + ' col-12'
            )}
          >
            <ul>
              <li>
                <a href='#' className={styles.active}>
                  Home
                </a>
              </li>
              <li>
                <a href='#'>Furniture</a>
              </li>
              <li>
                <a href='#'>Chair</a>
              </li>
              <li>
                <a href='#'>Table</a>
              </li>
              <li>
                <a href='#'>Sofa</a>
              </li>
              <li>
                <a href='#'>Bedroom</a>
              </li>
              <li>
                <a href='#'>Blog</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
