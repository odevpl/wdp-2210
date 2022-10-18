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
  console.log(brands);
  return (
    <div className='container'>
      <div className={styles.brandImageBox}>
        <div className={styles.faBox}>
          <FontAwesomeIcon
            className={styles.fa}
            icon={faArrowAltCircleLeft}
            faAlignCenter
          />
        </div>
        {brands.map(brand => (
          <div className={styles.brandImage} key={brand.id}>
            <img
              src={`${process.env.PUBLIC_URL}/images/Brands/${brand.name}.jpg`}
              alt='sofa'
            />
          </div>
        ))}
        <div className={styles.faBox}>
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
