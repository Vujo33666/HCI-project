import React from 'react'

import styles from './style.module.css'

const Quote = ({active, quoteText, quoteBy}) => (
    <div className={active === true ? styles.quotePlay :
                    active === false ? styles.quoteHide :
                    active === "playMovie" ? styles.quotePlay :
                    styles.landingQuote}>
        <li className={styles.quoteText}>
            {quoteText}
        </li>
        <li className={styles.quoteBy}>
            {quoteBy}
        </li>
    </div>
)
  
export default Quote