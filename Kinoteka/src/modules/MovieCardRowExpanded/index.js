import React from "react"

import styles from './style.module.css'
import MovieCardRow from '../../components/MovieCardRow'
import MovieCardDropDown from "../../components/MovieCardDropDown"

const MovieCardRowExpanded = () => (
    <div className={styles.pool}>
        <MovieCardRow />
        <MovieCardDropDown />
    </div>
)

export default MovieCardRowExpanded