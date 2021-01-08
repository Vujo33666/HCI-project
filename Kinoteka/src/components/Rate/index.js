import React, { useState } from 'react'

import styles from './style.module.css'
import { FaStar } from "react-icons/fa"

const Rate = ({text}) => {
    const [rating, setRating] = useState(null)

    return (
        <div className={styles.rate}>
            <li className={styles.stars}>
                {[...Array(5)].map((star, i) => {
                    if (text === "Ocjenite Sami") {
                        const ratingValue = i + 1;

                        return (
                            <FaStar 
                                size={16}
                                className={ratingValue <= rating ? styles.active : styles.notActive}
                                onClick={() => setRating(rating === ratingValue ? null : ratingValue)}
                            />
                        )
                    }
                    else {
                        return (
                            <FaStar size={16}/>
                        )
                    }
                })}
            </li>
            <li className={styles.text}>{text}</li>
        </div>
    )
}

export default Rate