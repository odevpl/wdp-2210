import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import SpecjalOffer from '../../features/SpecjalOffer/SpecjalOffer';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <SpecjalOffer />
    <NewFurniture />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
