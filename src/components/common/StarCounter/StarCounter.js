import React from 'react';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { editStars } from '../../../redux/productsRedux';

import styles from './StarCounter.module.scss';

const StarCounter = ({ stars, item }) => {
  const dispatch = useDispatch();

  const valueHandler = (e, i) => {
    e.preventDefault();
    dispatch(editStars({ ...item, myStars: i }));
  };

  if (item.myStars) {
    return (
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map(i => (
          <a
            key={i}
            className={styles.active}
            href='#'
            onClick={e => valueHandler(e, i)}
          >
            {i <= item.myStars ? (
              <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
            )}
          </a>
        ))}
      </div>
    );
  } else if (!item.myStars) {
    return (
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map(i => (
          <a key={i} href='#' onClick={e => valueHandler(e, i)}>
            {i <= stars ? (
              <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
            )}
          </a>
        ))}
      </div>
    );
  }
};

StarCounter.propTypes = {
  stars: PropTypes.number,
  item: PropTypes.object,
};

export default StarCounter;
