import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

import clsx from 'clsx';
import { useState } from 'react';

const ProductBox = ({ name, price, promo, stars, favorite }) => {

  const [isFavorite , setFavorite] =useState(favorite);
  const [exchange, setExchange] =useState(false);
  const [mouse, setMouse] = useState(false)
  
  

  const clickFavorite =()=>{
    if(isFavorite === true){
      setFavorite(false);
    }else if(isFavorite === false){
      setFavorite(true);
    }

  };

  const clickExchange =()=>{
    if(exchange === true){
      setExchange(false);
    }else if(exchange === false){
      setExchange(true);
    }

  };
  
  const mouseEnter = e => {
    e.preventDefault();
    setMouse(true);
  };

  const mouseLeave = e => {
    e.preventDefault();
    setMouse(false);
  };

  
  return( 
    <div className={styles.root} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <div className={styles.photo} style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bed/` + name.slice(-1) +'.jpg)' }}>

        {promo && <div className={styles.sale} sty>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small'  className={mouse ? '' : styles.none}>Quick View</Button>
          <Button variant='small' className={mouse ? '' : styles.none}>

            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              {i <= stars ? (
                <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={clsx(styles.outlines)}>
          <Button onClick={clickFavorite} className={clsx(favorite && styles.stars)} variant='outline' >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button onClick={clickExchange} variant='outline' className={clsx(exchange && styles.stars )}>
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          <Button noHover variant='small' className={mouse ? 'color' : ''}>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
};

export default ProductBox;
