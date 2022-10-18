import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';
import { NavLink } from 'react-router-dom';

const MenuBar = ({ children }) => {
  const [category, setCategory] = useState('home');

  const categoryHandler = (e, value) => {
    switch (value) {
      case 'home':
        setCategory('home');
        break;
      case 'furniture':
        setCategory('furniture');
        break;
      case 'chair':
        setCategory('chair');
        break;
      case 'sofa':
        setCategory('sofa');
        break;
      case 'bedroom':
        setCategory('bedroom');
        break;
      case 'blog':
        setCategory('blog');
        break;
      case 'table':
        setCategory('table');
        break;
      default:
        setCategory('home');
    }
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col'>
            <ProductSearch />
          </div>
          <div className={'col-auto ' + styles.menu}>
            <ul>
              <li>
                <NavLink
                  to={'/'}
                  value={'home'}
                  className={category === 'home' ? styles.active : ''}
                  onClick={e => categoryHandler(e, 'home')}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/shop/furniture'}
                  className={category === 'furniture' ? styles.active : ''}
                  value={'furniture'}
                  onClick={e => categoryHandler(e, 'furniture')}
                >
                  Furniture
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/shop/chair'}
                  className={category === 'chair' ? styles.active : ''}
                  value={'chair'}
                  onClick={e => categoryHandler(e, 'chair')}
                >
                  Chair
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/shop/table'}
                  className={category === 'table' ? styles.active : ''}
                  value={'table'}
                  onClick={e => categoryHandler(e, 'table')}
                >
                  Table
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/shop/sofa'}
                  className={category === 'sofa' ? styles.active : ''}
                  value={'sofa'}
                  onClick={e => categoryHandler(e, 'sofa')}
                >
                  Sofa
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/shop/bedroom'}
                  className={category === 'bedroom' ? styles.active : ''}
                  value={'bedroom'}
                  onClick={e => categoryHandler(e, 'bedroom')}
                >
                  Bedroom
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/blog'}
                  className={category === 'blog' ? styles.active : ''}
                  value={'blog'}
                  onClick={e => categoryHandler(e, 'blog')}
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
