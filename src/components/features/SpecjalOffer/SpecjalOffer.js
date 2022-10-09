import React from 'react';
import styles from './SpecjalOffer.module.scss';

const SpecjalOffer = () => {
  return (
    <div className='container'>
      <div className={styles.prom}>
        <div className={styles.left}>
          <div className={styles.image}></div>
          <div className={styles.opis}>opis bedzie ile czego</div>
        </div>
        <div className={styles.right}>
          <div className={styles.up}>up</div>
          <div className={styles.down}>down</div>
        </div>
      </div>
    </div>
  );
};

export default SpecjalOffer;
