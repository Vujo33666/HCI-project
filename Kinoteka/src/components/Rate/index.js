import React from 'react'

import styles from './style.module.css'
import { FaStar } from "react-icons/fa"

const Rate = ({text}) => (
    <div className={styles.rate}>
        <li className={styles.stars}>
            <FaStar size={16}/>
            <FaStar size={16}/>
            <FaStar size={16}/>
            <FaStar size={16}/>
            <FaStar size={16}/>
        </li>
        <li className={styles.text}>{text}</li>
    </div>
)

export default Rate