import React from 'react';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';

import styles from './StarCounter.module.scss';

const StarCounter = ({ stars, item }) => {
  const starsHandler = e => {
    e.preventDefault();
    console.log(item);
  };

  const valueHandler = e => {
    e.preventDefault();
    console.log(e.target.getAttribute('value'));
    console.log(e.target);
  };

  return (
    <div className={styles.stars} onMouseEnter={starsHandler}>
      {[1, 2, 3, 4, 5].map(i => (
        <a key={i} href='#' onClick={valueHandler}>
          {i <= stars ? (
            <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
          )}
        </a>
      ))}
    </div>
  );
};

StarCounter.propTypes = {
  stars: PropTypes.number,
  item: PropTypes.object,
};

export default StarCounter;
