import React from 'react'

import styles from './style.module.css'
import Rate from '../Rate'
import Button from '../Button'

const MovieCardDropDown = () => (
    <div className={styles.dropDown}>
        <div className={styles.description}>
            <li className={styles.movieDescription}>
                Movie Description...
            </li>
            <div className={styles.buttons}>
                <Button />
                <Button />
                <Button />
            </div>
        </div>
        <div className={styles.rating}>
            <Rate text="Ocjene Korisnika"/>
            <Rate text="IMDB Ocjena"/>
            <Rate text="Ocjenite Sami"/>
        </div>
    </div>
)

export default MovieCardDropDown