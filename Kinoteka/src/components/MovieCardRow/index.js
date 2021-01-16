import React from "react"

import styles from './style.module.css'
import MovieCard  from '../MovieCard'
import {movieNames,moviePictures} from "../../firebase/getBanner.js"
import actionMovies from "../../firebase/getAction.js"

function createMovieCard(obj){
    return(
    <MovieCard 
        key={obj.id}
        name={obj.name}
        img={obj.image}
        />
    );
}
const MovieCardRow = ({onClick}) => (
    <div onClick = {onClick}
         className={styles.row}
    >
        {actionMovies.map(createMovieCard)}
    </div>
)

export default MovieCardRow