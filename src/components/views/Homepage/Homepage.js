import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import SpecjalOffer from '../../features/SpecjalOffer/SpecjalOffer';
import BrandBox from '../../common/BrandBox/BrandBox';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <SpecjalOffer />
    <NewFurniture />
    <BrandBox />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
