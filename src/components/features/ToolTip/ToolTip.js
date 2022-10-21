import React from 'react';
import styles from './ToolTip.module.scss';



const ToolTip = ({param, toolTiptext }) => {




  return(
    <div className={styles.toolTipBox}>
      {param}
      <div className={styles.toolTip}>
        <p>{toolTiptext}</p>
      </div>
    </div>
  );
};

export default ToolTip;