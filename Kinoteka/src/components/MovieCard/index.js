import React from "react"

import styles from './style.module.css'
import firebase from "gatsby-plugin-firebase"
import {movieNames,moviePictures} from "../../firebase/getBanner.js"



const MovieCard = ({movieCardWhere}) => {
    return(
        <div className={styles.card}>
            {<li>ime filma</li>}
            
        </div>
        
    )
}

export default MovieCard