import React from 'react';
import styles from './SpecjalOffer.module.scss';
import { useSelector } from 'react-redux';

const SpecjalOffer = () => {
  const promo = useSelector(store => store.categories);

  console.log('promo', promo);

  return (
    <div className='container'>
      <div className={styles.prom}>
        <div className={styles.left}>
          <div className={styles.image}>
            <img
              src={`${process.env.PUBLIC_URL}/images/specjalOffer/sofa.jpg`}
              alt='sofa'
            />
            <div className={styles.text}>
              <h1>Guest room </h1>
              <h1>
                <span> {promo[2].name}</span>
              </h1>
              <h1 className={styles.border}> 20%</h1>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.up}>
            <div className={styles.image}>
              <img
                src={`${process.env.PUBLIC_URL}/images/specjalOffer/chair.jpg`}
                alt='chair'
              />
              <div className={styles.text}>
                <h1>
                  <span>Garden</span> {promo[0].name}
                </h1>
                <h1>colection</h1>
                <h1>$200</h1>
              </div>
            </div>
          </div>
          <div className={styles.down}>
            <div className={styles.image}>
              <img
                src={`${process.env.PUBLIC_URL}/images/specjalOffer/bed.jpg`}
                alt='bed'
              />
              <div className={styles.text}>
                <h1>
                  <span>Specjal</span> colection
                </h1>
                <h1>Save up 40% of furniture</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecjalOffer;
