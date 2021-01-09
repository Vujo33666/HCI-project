import React, { useState } from 'react'

import styles from './style.module.css'
import { FaStar } from "react-icons/fa"

const Rate = ({text}) => {
    const [rating, setRating] = useState(null)

    return (
        <div className={styles.rate}>
            <li className={styles.stars}>
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;

                    if (text === "Ocjenite Sami") {

                        return (
                            <FaStar 
                                key={ratingValue}
                                size={16}
                                className={ratingValue <= rating ? styles.active : styles.notActive}
                                onClick={() => setRating(rating === ratingValue ? null : ratingValue)}
                            />
                        )
                    }
                    else {
                        return (
                            <FaStar 
                                key={ratingValue}
                                size={16}
                            />
                        )
                    }
                })}
            </li>
            <li className={styles.text}>{text}</li>
        </div>
    )
}

export default Rate