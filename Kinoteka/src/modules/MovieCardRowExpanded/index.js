import React, { useState } from 'react'

import styles from './style.module.css'
import MovieCardRow from '../../components/MovieCardRow'
import MovieCardDropDown from "../../components/MovieCardDropDown"
import Quote from '../../components/Quote'

const MovieCardRowExpanded = ({quoteText, quoteBy}) => {
    const [isActive, setValue] = useState(true);

    return (
        <div className={styles.pool}>
            <button onMouseOver={() => setValue(false)}
                    onMouseLeave={() => setValue(true)}
            > BOTUN </button>
            <MovieCardRow   onMouseOver={() => setValue(false)}
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