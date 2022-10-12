import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { useState } from 'react';
import StarCounter from '../StarCounter/StarCounter';

const ProductBox = ({ name, price, promo, stars, item }) => {
  const [mouse, setMouse] = useState(false);

  const mouseEnter = e => {
    e.preventDefault();
    setMouse(true);
  };

  const mouseLeave = e => {
    e.preventDefault();
    setMouse(false);
  };

  return (
    <div className={styles.root} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <div className={styles.photo}>
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small' className={mouse ? '' : styles.none}>
            Quick View
          </Button>
          <Button variant='small' className={mouse ? '' : styles.none}>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <StarCounter stars={stars} item={item} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button variant='outline'>
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
  item: PropTypes.object,
};

export default ProductBox;
