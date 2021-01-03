import React from "react"

import styles from './style.module.css'
import MovieCard  from '../MovieCard'

const MovieCardRow = () => (
    <div className={styles.row}>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
    </div>
)

export default MovieCardRow