import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';

const ProductList = () => {
  // ProductList.propTypes = {};

  return (
    <div className={styles.root}>
      <div className={'container '}>
        <div className={'col-12 ' + styles.banner_container}>
          <div className={styles.baner_background}>
            <div className={'col-12 ' + styles.baner_text}>
              <h2>
                BEDROOM <span>FURNITURE</span>
              </h2>
              <h4>
                {' '}
                ALWAYS <span>25%</span> OFF OR MORE
              </h4>
            </div>
          </div>
          <div className={styles.baner_navi}>
            <h6>
              Home <span>&gt;</span>
              <span className={styles.banerSpan}>Furniture</span>
            </h6>
          </div>
        </div>
        <div className={'col-12 ' + styles.product_container}>
          <div className={'col-9 ' + styles.product_list}>Product List</div>
          <div className={'col-3 ' + styles.filters}>Filters</div>
        </div>
        <div className={'col-12 ' + styles.brands}>Brands</div>
      </div>
    </div>
  );
};

export default ProductList;
