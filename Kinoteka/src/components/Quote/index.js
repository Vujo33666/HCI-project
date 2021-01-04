import React from 'react'

import styles from './style.module.css'

const Quote = ({active, quoteText, quoteBy}) => (
    <div className={active === true ? styles.quote : styles.quoteHide}>
        <li className={styles.quoteText}>
            {quoteText}
        </li>
        <li className={styles.quoteBy}>
            {quoteBy}
        </li>
    </div>
)
  
export default Quote