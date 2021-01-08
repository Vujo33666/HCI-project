import React, { useState } from 'react'

import styles from './style.module.css'
import MovieCardRow from '../../components/MovieCardRow'
import MovieCardDropDown from "../../components/MovieCardDropDown"
import Quote from '../../components/Quote'

const MovieCardRowExpanded = ({quoteText, quoteBy}) => {
    const [isActive, setValue] = useState(true);

    return (
        <div className={styles.pool}>
            <button onMouseEnter={() => setValue(false)}
                    onMouseLeave={() => setValue(true)}
                    className={styles.testButton}
            > BOTUN </button>
            <MovieCardRow   onMouseEnter={() => setValue(false)}
                            onMouseLeave={() => setValue(true)}
            />
            <Quote  active = {isActive}
                    quoteText = {quoteText}
                    quoteBy = {quoteBy}
            />
            <MovieCardDropDown active = {!isActive}/>
        </div>
    )
}

export default MovieCardRowExpanded