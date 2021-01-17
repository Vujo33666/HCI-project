import React, { useState } from 'react'

import styles from './style.module.css'
import MovieCardRow from '../../components/MovieCardRow'
import MovieCardDropDown from "../../components/MovieCardDropDown"
import Quote from '../../components/Quote'

const MovieCardRowExpanded = ({quoteText, quoteBy}) => {
    const [isActive, setValue] = useState(true);
    const [movie,setMovie]=useState("");

    function setMovieDetails(movie){
        //dobijemo detalje od movieCard-a pa movieCardRow-a
        console.log(" u setu smo " + movie);
    }

    return (
        <div className={styles.pool}>
            <MovieCardRow
                onClick = {() => setValue(!isActive)}
                clickedMovie={setMovieDetails}
            />
            <Quote
                active = {isActive}
                quoteText = {quoteText}
                quoteBy = {quoteBy}
            />
            <MovieCardDropDown
                active = {!isActive}
            />
        </div>
    )
}

export default MovieCardRowExpanded