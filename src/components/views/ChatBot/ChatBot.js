import React from 'react';
import styles from './ChatBot.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import { faMinus, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

const ChatBot = () => {
  const [active, setActive] = useState(false);

  const clickHandler = e => {
    e.preventDefault();
    if (active === false) {
      setActive(true);
    } else if (active === true) {
      setActive(false);
    }
  };

  return (
    <div className={styles.root}>
      <div className={active ? styles.textArea : styles.notActive}>
        <div className={styles.textAreaBtn}>
          <span onClick={clickHandler}>
            <FontAwesomeIcon icon={faMinus} />
          </span>
        </div>
        <div className={styles.text}>How can I help you?</div>
        <div className={styles.area}>
          <span>
            <FontAwesomeIcon icon={faPaperPlane} />
          </span>
          <textarea rows='1'></textarea>
        </div>
      </div>
      <div className={styles.icon} onClick={clickHandler}>
        <FontAwesomeIcon icon={faComments} />
      </div>
    </div>
  );
};

export default ChatBot;
