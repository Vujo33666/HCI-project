import React from "react"

import styles from './style.module.css'
import firebase from "gatsby-plugin-firebase"


/*const MovieCard = ({movieCardWhere}) => {
    return(
        <div className={styles.card}>
            {<li>ime filma</li>}
            
        </div>
        
    )
}*/

const MovieCard = (props) => {
    return(
        <div style={{
            backgroundImage: `url(${props.img})`}}
            className={styles.card}
            onClick={()=>{return props.clickedMovie(props.id)}}>
            {<li>
                {props.name}
                
            </li>}
            
        </div>
        
    )
}

export default MovieCard