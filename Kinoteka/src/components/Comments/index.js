import React from 'react'

import styles from './style.module.css'

const Comments = ({which, commentText}) => (
    <div className={which === "write" ? styles.writeComment : styles.comments} >
        {commentText}
    </div>
)

export default Comments