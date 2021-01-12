import React from 'react'

import styles from './style.module.css'

const Comments = ({which, commentText}) => (
    <div className={which === "write" ? styles.writeComment : 
                    which === "first" ? styles.discussionQuestion : 
                    styles.comments}
    >
        {commentText}
    </div>
)

export default Comments