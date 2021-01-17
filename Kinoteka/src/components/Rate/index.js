import React, { useState } from 'react'

import styles from './style.module.css'
import { FaStar } from "react-icons/fa"

const Rate = (props) => {
    const [rating, setRating] = useState(null)

    return (
        <div className={styles.rate}>
            <li className={styles.stars}>
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;

                    if (props.text === "Ocjenite Sami") {

                        return (
                            <FaStar 
                                key={ratingValue}
                                className={ratingValue <= rating ? styles.active : styles.notActive}
                                onClick={() => setRating(rating === ratingValue ? null : ratingValue)}
                            />
                        )
                    }else if(props.text === "Ocjene Korisnika"){
                        return (
                            <FaStar 
                                key={ratingValue}
                                className={ratingValue <= props.ocjene_korisnika ? styles.active : styles.notActive2}
                            />
                        )
                    }//sljedece su ocjene imbd
                    else {
                        return (
                            <FaStar 
                                key={ratingValue}
                                className={ratingValue <= props.ocjene_imbd ? styles.active : styles.notActive2}
                            />
                        )
                    }
                })}
            </li>
            <li className={styles.text}>{props.text}</li>
        </div>
    )
}

export default Rate