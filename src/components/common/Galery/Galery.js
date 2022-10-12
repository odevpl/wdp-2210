import React from 'react';
import styles from './Galery.module.scss';

const Galery = () => {
  return (
    <div className='container'>
      <div className={styles.wrapper}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <img src='%PUBLIC_URL%/images/galery/bed.jpg' alt='bed' />
          <div className='description'>
            <h2>
              h2 <span>kasa</span>
            </h2>
            <h1>h1</h1>
            <button>button</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galery;
