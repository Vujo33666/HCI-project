import React from 'react'

import styles from './style.module.css'

const UserLists = ({listText}) => (
    <div className={styles.userList} >
        {listText}
    </div>
)

export default UserLists