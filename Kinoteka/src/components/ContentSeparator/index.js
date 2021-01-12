import React from 'react'

import styles from './style.module.css'

const ContentSeparator = ({separatorText}) => (
    <div className={styles.contentSeparator} >
        <div className={styles.verticalLine}/>
        <div className={styles.commentsMessage}>
            {separatorText}
        </div>
        <div className={styles.verticalLine}/>
    </div>
)

export default ContentSeparator