import React from "react"

import styles from './style.module.css'
import MovieCardRow from '../../components/MovieCardRow'
import MovieCard from "../../components/MovieCard"

const MovieCardRowExpanded = () => (
    <div className={styles.row}>
        <MovieCardRow />
    </div>
)

export default MovieCardRowExpanded