import React from 'react';
import styles from './Blog.module.scss';
import Swipeable from '../../common/Swipeable/Swipeable';
import clsx from 'clsx';
import { faCalendar, faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Blog = () => {
  return (
    <div>
      <Swipeable>
        <div className={styles.root}>
          <div className='container'>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end'>
                <div className={'col-12 col-sm-12 col-md-3 ' + styles.heading}>
                  <h3>LATEST BLOG</h3>
                </div>
                <div className={'col ' + styles.menu}>
                  <ul>
                    <li></li>
                  </ul>
                </div>
                <div className={'col-auto ' + styles.dots}>
                  <ul></ul>
                </div>
              </div>
            </div>
            <div className={styles.blogContener}>
              <div className={styles.blogBox}>
                <div className={styles.blogImg}>
                  <div className={styles.blogInfo}>
                    <p className={styles.dispaly}>
                      <span>
                        <FontAwesomeIcon className={styles.icon} icon={faCalendar} />
                        15 Jan 2016
                      </span>
                      <span>
                        <FontAwesomeIcon className={styles.icon} icon={faComment} />
                        4Coments
                      </span>
                    </p>
                  </div>
                </div>
                <div className={clsx(styles.blogText)}>
                  <h4>Products That Fight Static</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industrys standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not
                    only five centuries, but also the leap into{' '}
                  </p>
                  <button>Read More</button>
                </div>
              </div>
              <div className={clsx(styles.blogBox)}>
                <div className={styles.blogImg}>
                  <div className={styles.blogInfo}>
                    <p className={styles.dispaly}>
                      <span>
                        <FontAwesomeIcon className={styles.icon} icon={faCalendar} />
                        15 Jan 2016
                      </span>
                      <span>
                        <FontAwesomeIcon className={styles.icon} icon={faComment} />
                        4Coments
                      </span>
                    </p>
                  </div>
                </div>
                <div className={styles.blogText}>
                  <h4>Products That Fight Static</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industrys standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not
                    only five centuries, but also the leap into{' '}
                  </p>
                  <button>Read More</button>
                </div>
              </div>
              <div className={clsx(styles.blogBox)}>
                <div className={styles.blogImg}>
                  <div className={styles.blogInfo}>
                    <p className={styles.dispaly}>
                      <span>
                        <FontAwesomeIcon className={styles.icon} icon={faCalendar} />
                        15 Jan 2016
                      </span>
                      <span>
                        <FontAwesomeIcon className={styles.icon} icon={faComment} />
                        4Coments
                      </span>
                    </p>
                  </div>
                </div>
                <div className={styles.blogText}>
                  <h4>Products That Fight Static</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industrys standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not
                    only five centuries, but also the leap into{' '}
                  </p>
                  <button>Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Swipeable>
    </div>
  );
};
export default Blog;
