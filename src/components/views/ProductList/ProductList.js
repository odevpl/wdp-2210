import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';

const ProductList = () => {
  // ProductList.propTypes = {};

  return (
    <div className={styles.root}>
      <div className={'container ' + styles.x}>
        <div className={'col-12 ' + styles.banner}>
          <div>Banner</div>
          <div>Home</div>
        </div>
        <div className={'col-12 ' + styles.product_container}>
          <div className={'col-9 ' + styles.product_list}>Product List</div>
          <div className={'col-3 ' + styles.filters}>Filters</div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
