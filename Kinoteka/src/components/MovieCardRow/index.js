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
       {
           actionMovies.map((obj)=>{
            return(
                <MovieCard 
                    key={obj.id}
                    id={obj.id}
                    name={obj.name}
                    img={obj.image}
                    banner={obj.banner}
                    ocjene_korisnika={obj.ocjene_korisnika}
                    ocjene_imbd={obj.ocjene_imbd}
                    clickedMovie={(objProp)=>props.clickedMovie(objProp)}
                    />
                );
           })
       }
    </div>
)

export default MovieCardRow