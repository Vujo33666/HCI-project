import React from 'react'

import styles from './style.module.css'
import Quote from '../../components/Quote'
import PlayMoviePicture from '../../components/PlayMovieBackground'
import MovieCard from '../../components/MovieCard'
import Rate from '../../components/Rate'

const PlayMovieBody = () => (
    <div className={styles.playMovieBody} >
        <Quote 
            quoteText = {
                'Jojo’s mom: “Love is the strongest thing in the world.”\nJojo: “I think you will find that metal is the strongest thing in the world, followed closly by dynamite and then muscles.”'
            }
            quoteBy = "JOJO RABBIT"
            active = "playMovie"
        />
        <PlayMoviePicture />
        <div className={styles.playMovieDescription}>
            <section className={styles.movieInfo}>
                <ul className={styles.movieName}>
                    movie Name
                </ul>
                <ul className={styles.movieCathegory}>
                    movie Cathegory
                </ul>
                <ul  className={styles.movieDuration}>
                    1 movie 1 duration
                </ul>
                <ul className={styles.movieRating}>
                    <Rate text="Ocjene Korisnika"/>
                    <Rate text="IMDB Ocjena"/>
                    <Rate text="Ocjenite Sami"/>
                </ul>
            </section>
            <section className={styles.movieDescription}>
                    Movie Description...
            </section>
        </div>
        <div className={styles.commentsSection}>
            <div className={styles.commentsIntroMessage}>
                <div className={styles.verticalLine}/>
                <div className={styles.commentsMessage}>
                    { 'KOMENTARI\n*onemogućeni za neprijavljene korisnike*' }
                </div>
                <div className={styles.verticalLine}/>
            </div>
        </div>
    </div>
)

export default PlayMovieBody