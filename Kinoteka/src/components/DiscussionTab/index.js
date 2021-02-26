import React from 'react'

import { Link } from 'gatsby'
import styles from './style.module.css'

const DiscussionTab = ({topicText}) => (
    <Link 
        to='/forumRasprava'>
        <div className={styles.discussionTab} >
            {topicText}
        </div>
    </Link>
)

export default DiscussionTab