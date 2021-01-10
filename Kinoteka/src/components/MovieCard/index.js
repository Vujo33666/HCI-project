import React from "react"

import styles from './style.module.css'

const MovieCard = ({movieCardWhere}) => (
    <div className={movieCardWhere === "playMovie" ? styles.cardBig : styles.card}>
        <li>
            MOVIE NAME
        </li>
    </div>
)

export default MovieCard