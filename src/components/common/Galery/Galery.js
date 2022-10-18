import React from 'react';
import styles from './Galery.module.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faShoppingBasket,
  faExchangeAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import StarCounter from '../StarCounter/StarCounter';
import { useSelector } from 'react-redux';

const Galery = () => {
  const chairs = useSelector(store =>
    store.products.filter(product => product.category === 'chair')
  );

  console.log(chairs);

  var content1 = document.getElementsByClassName(styles.content1);
  var content2 = document.getElementsByClassName(styles.content2);
  var content3 = document.getElementsByClassName(styles.content3);
  var content4 = document.getElementsByClassName(styles.content4);

  const tab1 = e => {
    e.preventDefault();
    content1[0].style.visibility = 'visible';
    content2[0].style.visibility = 'hidden';
    content3[0].style.visibility = 'hidden';
    content4[0].style.visibility = 'hidden';

    console.log(content1[0].style.visibility);
    console.log(content2[0].style.visibility);
    console.log(content3[0].style.visibility);
    console.log(content4[0].style.visibility);
  };

  const tab2 = e => {
    e.preventDefault();
    content2[0].style.visibility = 'visible';
    content1[0].style.visibility = 'hidden';
    content3[0].style.visibility = 'hidden';
    content4[0].style.visibility = 'hidden';

    console.log(content1[0].style.visibility);
    console.log(content2[0].style.visibility);
    console.log(content3[0].style.visibility);
    console.log(content4[0].style.visibility);
  };

  const tab3 = e => {
    e.preventDefault();
    content3[0].style.visibility = 'visible';
    content1[0].style.visibility = 'hidden';
    content2[0].style.visibility = 'hidden';
    content4[0].style.visibility = 'hidden';

    console.log(content1[0].style.visibility);
    console.log(content2[0].style.visibility);
    console.log(content3[0].style.visibility);
    console.log(content4[0].style.visibility);
  };

  const tab4 = e => {
    e.preventDefault();
    content4[0].style.visibility = 'visible';
    content1[0].style.visibility = 'hidden';
    content3[0].style.visibility = 'hidden';
    content2[0].style.visibility = 'hidden';

    console.log(content1[0].style.visibility);
    console.log(content2[0].style.visibility);
    console.log(content3[0].style.visibility);
    console.log(content4[0].style.visibility);
  };

  return (
    <div className='container'>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h5>FURNITURE GALLERY</h5>
          <div className={styles.main}>
            <div className={styles.buttonAndImg}>
              <div className={styles.buttonBox}>
                <button className={clsx(styles.btn, styles.btn1)} onClick={tab1}>
                  FEATURED
                </button>
                <button className={clsx(styles.btn, styles.btn2)} onClick={tab2}>
                  TOP SELLER
                </button>
                <button className={clsx(styles.btn, styles.btn3)} onClick={tab3}>
                  SALE OF
                </button>
                <button className={clsx(styles.btn, styles.btn4)} onClick={tab4}>
                  TOP RATED
                </button>
              </div>
              <div className={clsx(styles.content1, styles.content)}>
                <img
                  src={process.env.PUBLIC_URL + '/images/galery/featured.jpg'}
                  alt='bed'
                />
                <div className={styles.boardForStars}>
                  <p>name</p>
                  <StarCounter stars={2} item={'name'} />
                </div>
                <div className={styles.leftMenu}>
                  <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
                  <FontAwesomeIcon className={styles.icon} icon={faExchangeAlt}>
                    Add to compare
                  </FontAwesomeIcon>
                  <FontAwesomeIcon className={styles.icon} icon={faHeart}>
                    Favorite
                  </FontAwesomeIcon>
                </div>
              </div>
              <div className={clsx(styles.content2, styles.content)}>
                <img
                  src={process.env.PUBLIC_URL + '/images/galery/topSeller.jpg'}
                  alt='bed1'
                />
              </div>
              <div className={clsx(styles.content3, styles.content)}>
                <img
                  src={process.env.PUBLIC_URL + '/images/galery/saleOff.jpg'}
                  alt='bed2'
                />
              </div>
              <div className={clsx(styles.content4, styles.content)}>
                <img
                  src={process.env.PUBLIC_URL + '/images/galery/topRated.jpg'}
                  alt='bed3'
                />
              </div>
            </div>
          </div>
          <div className={styles.slider}>
            <div className={styles.arrow}>
              <FontAwesomeIcon
                className={styles.fa}
                icon={faArrowAltCircleLeft}
                faAlignCenter
              />
            </div>
            <div className={styles.sliderImg}>
              {chairs.map(chair => (
                <div
                  className={clsx(styles.smallImageBox, styles.noActive)}
                  key={chair.name}
                >
                  <img
                    src={process.env.PUBLIC_URL + '/images/chair/' + chair.img + '.jpg'}
                    alt='bed'
                  />
                </div>
              ))}
            </div>
            <div className={styles.arrow}>
              <FontAwesomeIcon
                className={styles.fa}
                icon={faArrowAltCircleRight}
                faAlignCenter
              />
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img src={process.env.PUBLIC_URL + '/images/galery/bed.jpg'} alt='bed' />
          <div className={styles.description}>
            <h4>
              FROM <span>$50.80</span>
            </h4>
            <h1>Bedroom Bed</h1>
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galery;
