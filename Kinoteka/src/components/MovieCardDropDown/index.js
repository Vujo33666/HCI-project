import React from 'react'

import styles from './style.module.css'
import Rate from '../Rate'
import Button from '../Button'

const MovieCardDropDown = ({active}) => (
    <div className={active === true ? styles.dropDown : styles.dropDownHide}>
        <div className={styles.description}>
            <li className={styles.movieDescription}>
                Movie Description...
            </li>
            <div className={styles.buttons}>
                <Button activeButton = 'watchNow'/>
                <Button activeButton = 'watchLater'/>
                <Button activeButton = 'addToFavourites'/>
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