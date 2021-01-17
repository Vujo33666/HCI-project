import React from "react"

import styles from './style.module.css'
import MovieCard  from '../MovieCard'

import actionMovies from "../../firebase/getAction.js"

function createMovieCard(obj){
    return(
    <MovieCard 
        key={obj.id}
        name={obj.name}
        img={obj.image}
        banner={obj.banner}
        />
    );
}


const MovieCardRow = (props) => (
    <div onClick = {props.onClick}
         className={styles.row}
    >
       {/*{actionMovies.map(createMovieCard)} */} 
       {
           actionMovies.map((obj)=>{
            return(
                <MovieCard 
                    key={obj.id}
                    id={obj.id}
                    name={obj.name}
                    img={obj.image}
                    banner={obj.banner}
                    clickedMovie={(objProp)=>props.clickedMovie(objProp)}
                    />
                );
           })
       }
    </div>
)

export default MovieCardRow