import React from 'react';

import styles from './Cart.module.scss';

const Cart = () => {
  return (
    <div className={`${styles.root} container`}>
      <h2>Cart</h2>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'></th>
            <th scope='col'></th>
            <th scope='col'>Product</th>
            <th scope='col'>Price</th>
            <th scope='col'>Quantity</th>
            <th scope='col'>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope='row' className={styles.tdBtn}>
              <button className={styles.btn}>x</button>
            </td>
            <td scope='row' className={styles.image}>
              image
            </td>
            <td>Example no1</td>
            <td className={styles.price}>$5.00</td>
            <td>
              <button>+</button>
              <input value='1'></input>
              <button>-</button>
            </td>
            <td className={styles.price}>$5.00</td>
          </tr>
          <tr>
            <td scope='row' className={styles.tdBtn}>
              <button className={styles.btn}>x</button>
            </td>
            <td scope='row' className={styles.image}>
              image
            </td>
            <td>Example no2</td>
            <td className={styles.price}>$10.00</td>
            <td>
              <button>+</button>
              <input value='1'></input>
              <button>-</button>
            </td>
            <td className={styles.price}>$10.00</td>
          </tr>
          <tr>
            <td scope='row' className={styles.tdBtn}>
              <button className={styles.btn}>x</button>
            </td>
            <td scope='row' className={styles.image}>
              image
            </td>
            <td>Example no3</td>
            <td className={styles.price}>$15.00</td>
            <td>
              <button>+</button>
              <input value='1'></input>
              <button>-</button>
            </td>
            <td className={styles.price}>$15.00</td>
          </tr>
        </tbody>
      </table>

      <div className={`${styles.coupon}`}>
        <input placeholder='Coupon code' />
        <button>APPLY COUPON</button>
        <button className={styles.cartBtn}>UPDATE CART</button>
      </div>

      <div className={styles.totalDiv}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Cart totals</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>$35.00</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>$35.00</td>
            </tr>
          </tbody>
          <button>PROCEED TO CHECKOUT</button>
        </table>
      </div>
    </div>
  );
};

export default Cart;
