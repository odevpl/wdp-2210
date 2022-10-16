import React from 'react';
import styles from './Popup.module.scss';
import StarCounter from '../StarCounter/StarCounter';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

function Popup(props) {
  if (props.popup == false) {
    return '';
  } else {
    return (
      <div className={styles.popup}>
        <div className={styles.popup_inner}>
          <button className={styles.close_bnt} onClick={() => props.setPopup(false)}>
            X
          </button>
          <div className={'' + styles.popup_container}>
            <div
              className={'col-5 ' + styles.photo}
              style={{
                backgroundImage:
                  `url(${process.env.PUBLIC_URL}/images/` +
                  props.item.category +
                  `/` +
                  props.item.img +
                  '.jpg)',
              }}
            ></div>
            <div className={'col-6 ' + styles.popup_info}>
              <h4>{props.item.name}</h4>
              <h3>Price: ${props.item.price}</h3>
              <div className={styles.discription}>Discription</div>
              <div className={styles.popup_button}>
                <StarCounter stars={props.stars} item={props.item} />
                <Button variant='small'>
                  <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO
                  CART
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
