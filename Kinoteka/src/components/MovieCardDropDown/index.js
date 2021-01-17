import React,{useState} from 'react'

import { Link } from 'gatsby'
import styles from './style.module.css'
import Rate from '../Rate'
import Button from '../Button'

import actionMovies from "../../firebase/getAction.js"

const MovieCardDropDown = (props) => {

    return (
    <div className={props.active === true ? styles.dropDown : styles.dropDownHide}>
        <div className={styles.description}>
            <li className={styles.movieDescription}>
                {props.currentMovie.name}
            </li>
            <div className={styles.buttons}>
                <Link to='/gledajFilm'>
                    <Button activeButton = 'watchNow'/>
                </Link>
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
}

export default MovieCardDropDown