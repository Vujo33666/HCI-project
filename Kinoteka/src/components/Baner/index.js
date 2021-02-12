import React,{useState} from 'react'

import { Link } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styles from './style.module.css'

import Navigation from '../Navigation'
import Rate from '../Rate'
import Button from '../Button'
import ScrollBar from '../ScrollBar'
import {movieNames,moviePictures,movieRating,movieImbdRating} from "../../firebase/getBanner";


const Baner = ({activeTab, navigationBarWhere}) => {

    const [movie,setMovie] = useState("Deadpool");
    const [moviePic,setPicture] = useState("https://firebasestorage.googleapis.com/v0/b/kinotekahci.appspot.com/o/DEADPOOL%20BANNER.jpg?alt=media&token=0ee492ee-8c75-4cc0-8179-198b270e3d1f");
    const [movieUserRating,setRating] = useState(3);
    const [imbdRating,setImbdRating] = useState(4);

     function checkedMovie (checkedBar){
        setMovie(movieNames[checkedBar-1]);
        setPicture(moviePictures[checkedBar-1]);
        setRating(movieRating[checkedBar-1]);
        setImbdRating(movieImbdRating[checkedBar-1]);
    }

    const data = useStaticQuery(graphql`
    query {
        desktop: file(relativePath: { eq: "kino.jpg" }) {
            childImageSharp {
                fluid(quality: 100, maxWidth: 1920) {
                ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `)
    
    return (
        <BackgroundImage
          className={styles.baner}
          fluid={data.desktop.childImageSharp.fluid}
        >
            <div className={styles.banerBackground}
            style={{
            backgroundImage: `url(${moviePic})`}}>
                <Navigation activeTab={activeTab} navigationBarWhere={navigationBarWhere}/>
                <section className={styles.movieInfo}>
                    <ul className={styles.movieName}>
                        {movie}
                    </ul>
                    <ul className={styles.movieCathegory}>
                        movie Cathegory
                    </ul>
                    <ul  className={styles.movieDuration}>
                        1 movie 1 duration
                    </ul>
                    <ul className={styles.movieRating}>
                        <Rate ocjene_korisnika={movieUserRating} text="Ocjene Korisnika"/>
                        <Rate ocjene_imbd={imbdRating} text="IMDB Ocjena"/>
                    </ul>
                    <ul  className={styles.watchNow}>
                        <Link to='/gledajFilm'>
                            <Button activeButton = "watchNowBig"/>
                        </Link>
                    </ul>
                    <ul  className={styles.banerScroll}>
                        <ScrollBar onChecked={checkedMovie}/>
                    </ul>
                    <ul  className={styles.banerBodySeparator}>
                        popularni
                    </ul>
                </section>
            </div>
        </BackgroundImage>
    )
}

export default Baner