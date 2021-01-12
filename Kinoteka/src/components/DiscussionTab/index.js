import React from 'react'

import styles from './style.module.css'

const DiscussionTab = ({topicText}) => (
    <div className={styles.discussionTab} >
        {topicText}
    </div>
)

export default DiscussionTab