import styles from './Login.module.scss';
import React from 'react';

const Login = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <form className={'col-auto '}>
          <div className={styles.label_container}>
            <label>Email</label>
            <input type='email'></input>
            <label>Hasło</label>
            <input type='password'></input>
            <p>
              Nie pamiętasz hasła? <a href='#'>Przypomniej hasło.</a>
            </p>
          </div>
          <div className={styles.button}>
            <button>Zaloguj się</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
