import React from 'react'

import styles from './style.module.css'

const InfoTab = ({text}) => (
    <div className={styles.infoTab} >
        {text}
        <div className={styles.inputField} />
    </div>
)

export default InfoTab