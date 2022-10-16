import React from 'react';
import styles from './Popup.module.scss';

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
          {props.children}
        </div>
      </div>
    );
  }
}

export default Popup;
