import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import Swipeable from '../../common/Swipeable/Swipeable';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    fade: false,
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
    // this.change();
  }
  change() {
    if (this.state.fade == false) {
      this.state.fade = true;
      return styles.fade_in;
    } else {
      this.state.fade = false;
      return styles.fade_out;
    }
  }

  render() {
    const { categories, products } = this.props;
    const { activeCategory, activePage } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    const leftAction = () => {
      this.handlePageChange(activePage + 1);
      if (activePage >= pagesCount - 1) {
        this.handlePageChange(activePage);
      }
    };

    const rightAction = () => {
      this.handlePageChange(activePage - 1);
      if (activePage <= 0) {
        this.handlePageChange(activePage);
      }
    };

    return (
      <div>
        <Swipeable rightAction={rightAction} leftAction={leftAction}>
          <div className={styles.root}>
            <div className='container'>
              <div className={styles.panelBar}>
                <div className='row no-gutters align-items-end'>
                  <div className={'col-auto ' + styles.heading}>
                    <h3>New furniture</h3>
                  </div>
                  <div className={'col ' + styles.menu}>
                    <ul>
                      {categories.map(item => (
                        <li key={item.id}>
                          <a
                            className={item.id === activeCategory && styles.active}
                            onClick={() => this.handleCategoryChange(item.id)}
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={'col-auto ' + styles.dots}>
                    <ul>{dots}</ul>
                  </div>
                </div>
              </div>
              <div className='row'>
                {categoryProducts
                  .slice(activePage * 8, (activePage + 1) * 8)
                  .map(item => (
                    <div key={item.id} className='col-3'>
                      <ProductBox {...item} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Swipeable>
      </div>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
