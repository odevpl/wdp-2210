import React from 'react';
import { useSelector } from 'react-redux';
import styles from './BrandBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from '@fortawesome/free-solid-svg-icons';

const BrandBox = () => {
  const brands = useSelector(store => store.brands);

  const left = () => {
    const leftArrow = document.getElementById('slider');
    leftArrow.scrollLeft -= 1080;
  };

  const right = () => {
    const rightArrow = document.getElementById('slider');
    rightArrow.scrollLeft += 1080;
  };

  return (
    <div className='container'>
      <div className={styles.brandImageBox}>
        <div id='left' className={styles.faBox} onClick={left}>
          <FontAwesomeIcon
            className={styles.fa}
            icon={faArrowAltCircleLeft}
            faAlignCenter
          />
        </div>
        <div id='slider' className={styles.sliderBox}>
          {brands.map(brand => (
            <div className={styles.brandImage} key={brand.id}>
              <img
                src={`${process.env.PUBLIC_URL}/images/Brands/${brand.name}.jpg`}
                alt='sofa'
              />
            </div>
          ))}
        </div>
        <div id='right' className={styles.faBox} onClick={right}>
          <FontAwesomeIcon
            className={styles.fa}
            icon={faArrowAltCircleRight}
            faAlignCenter
          />
        </div>
      </div>
    </div>
  );
};

export default BrandBox;
