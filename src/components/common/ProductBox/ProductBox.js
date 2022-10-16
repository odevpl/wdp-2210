import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import Popup from '../../common/Popup/Popup';

import clsx from 'clsx';
import { useState } from 'react';
import StarCounter from '../StarCounter/StarCounter';

import { useNavigate } from 'react-router-dom';

const ProductBox = ({ name, price, promo, stars, favorite, item }) => {
  const [isFavorite, setFavorite] = useState(favorite);
  const [exchange, setExchange] = useState(false);
  const [mouse, setMouse] = useState(false);
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate();

  const clickFavorite = () => {
    if (isFavorite === true) {
      setFavorite(false);
    } else if (isFavorite === false) {
      setFavorite(true);
    }
  };

  const clickExchange = () => {
    if (exchange === true) {
      setExchange(false);
    } else if (exchange === false) {
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

  const showPopup = e => {
    e.preventDefault();
    setPopup(true);
  };

  const clickHandler = (e, name) => {
    e.preventDefault();
    const replacedName = name.replace(/ /g, '-');
    navigate('/product/' + replacedName);
  };

  return (
    <div className={styles.root} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <div
        value={name}
        onClick={e => clickHandler(e, name)}
        className={styles.photo}
        style={{
          backgroundImage:
            `url(${process.env.PUBLIC_URL}/images/` +
            item.category +
            `/` +
            item.img +
            '.jpg)',
        }}
      >
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button
            variant='small'
            onClick={showPopup}
            className={mouse ? '' : styles.none}
          >
            Quick View
          </Button>
          <Button variant='small' className={mouse ? '' : styles.none}>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5 onClick={e => clickHandler(e, name)}>{name}</h5>
        <StarCounter stars={stars} item={item} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={clsx(styles.outlines)}>
          <Button
            onClick={clickFavorite}
            className={clsx(favorite && styles.stars)}
            variant='outline'
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            onClick={clickExchange}
            variant='outline'
            className={clsx(exchange && styles.stars)}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          <Button noHover variant='small' className={mouse ? 'color' : ''}>
            $ {price}
          </Button>
        </div>
      </div>
      <Popup popup={popup} setPopup={setPopup} item={item} stars={stars}>
        <h1>Hi</h1>
      </Popup>
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
  favorite: PropTypes.string,
};

export default ProductBox;
