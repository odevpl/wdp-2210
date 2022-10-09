import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './FeatureBox.module.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const FeatureBox = ({ icon, children }) => {
  const [hover, setHover] = useState(false);

  const mouseEnter = e => {
    e.preventDefault();
    setHover(true);
  };

  const mouseLeave = e => {
    e.preventDefault();
    setHover(false);
  };

  return (
    <a href='#'>
      <div
        className={styles.root + (hover ? ' ' + styles.active : '')}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        {icon && (
          <div className={styles.iconWrapper}>
            <FontAwesomeIcon className={styles.icon} icon={icon} />
          </div>
        )}
        <div className={styles.content}>{children}</div>
      </div>
    </a>
  );
};

FeatureBox.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.object,
  active: PropTypes.bool,
};

export default FeatureBox;
