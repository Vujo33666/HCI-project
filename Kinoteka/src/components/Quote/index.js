import React from 'react'

import styles from './style.module.css'

const Quote = ({active}) => (
    <div className={active === true ? styles.quote : styles.quoteHide}>
        <li className={styles.quoteText}>
            Movies are not about the weekend that they’re released, and in the grand scheme of things, that’s probably the most unimportant time of a film’s life.
        </li>
        <li className={styles.quoteBy}>
            - Quentin Tarantino
        </li>
    </div>
)
  
export default Quote