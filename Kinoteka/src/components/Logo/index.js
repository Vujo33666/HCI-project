import React from 'react'

import styles from './style.module.css'

const Logo = ({logoWhere}) => (
    <div className={logoWhere === 'navigationLogo' ? styles.logo2 : styles.logo} >
        <div className={styles.ellipse} />

        <div className={styles.lineVertical1} />
        <div className={styles.triangle} />

        <div className={styles.lineVertical2} />

        <div className={styles.lineVertical3} />
        <div className={styles.lineVerticalSmall} />
        <div className={styles.lineVertical4} />

        <div className={styles.rectangle} />
    </div>
)

export default Logo