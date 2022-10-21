import styles from './Register.module.scss';
import React from 'react';

const Register = () => {
  return (
    <div className={styles.root}>
      <div className={'container ' + styles.container}>
        <form className={styles.form}>
          <div className={styles.account}>
            <span>
              <input type='radio'></input>
              <label>Mam konto</label>
            </span>
            <span>
              <input type='radio'></input>
              <label>Nie mam konta</label>
            </span>
          </div>
          <div className={styles.accountData}>
            <h6>Podaj dane do rejestracji</h6>
            <input type='email' placeholder='E-mail *'></input>
            <input type='text' placeholder='Hasło *'></input>
            <input type='text' placeholder='Powtórz hasło *'></input>
          </div>
          <div className={styles.toogle_button}>
            <label className={styles.toogle} htmlFor='myToogle'>
              <input
                className={styles.toogle_input}
                type='checkbox'
                id='myToogle'
              ></input>
              <div className={styles.tootle_fill}></div>
            </label>
            <h6>Pokaż hasło</h6>
          </div>
          <div className={styles.statute}>
            <div>
              <input type='checkbox'></input>
              <label>Zaznacz wszystko</label>
            </div>
            <div>
              <input type='checkbox'></input>
              <label>
                Akceptuje warunki{' '}
                <span className={styles.statute_color}>regulaminu </span>*
              </label>
            </div>
            <div>
              <input type='checkbox'></input>
              <label>Tak, tak! Chcę otrzymywać JEŻowy newsletter</label>
            </div>
          </div>
          <div className={styles.button}>
            <a href='/' className={styles.button_back}>
              &lt; Wróć
            </a>
            <a href='/' className={styles.button_register}>
              Zarejestruj się
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
