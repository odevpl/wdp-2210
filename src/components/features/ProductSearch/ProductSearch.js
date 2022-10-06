import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => {
  return (
    <form action='' className={styles.root}>
      <div className={styles.category}>
        <FontAwesomeIcon className={styles.icon} icon={faListUl} />
        <div className={styles.dropdown}>
          <span>Select category</span>
          <div className={styles.content}>
            <ul>
              <li>
                <a>Bed</a>
              </li>
              <li>
                <a>Chair</a>
              </li>
              <li>
                <a>Table</a>
              </li>
              <li>
                <a>Sofa</a>
              </li>
              <li>
                <a>Dining</a>
              </li>
            </ul>
          </div>
        </div>
        <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
      </div>
      <div className={styles.searchField}>
        <input placeholder='Search products...' type='text' />
        <button>
          <FontAwesomeIcon className={styles.icon} icon={faSearch} />
        </button>
      </div>
    </form>
  );
};

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
