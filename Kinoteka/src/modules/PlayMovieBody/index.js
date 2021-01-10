import React from 'react'

import styles from './style.module.css'
import PlayMoviePicture from '../../components/PlayMovieBackground'
import MovieCard from '../../components/MovieCard'
import Rate from '../../components/Rate'

const PlayMovieBody = () => (
    <div className={styles.playMovieBody} >
        <PlayMoviePicture />
        <div className={styles.playMovieDescription}>
            <MovieCard movieCardWhere="playMovie"/>
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
                    <ul className={styles.movieDescription}>
                        Movie Description...
                    </ul>
                </section>
        </div>
    </div>
)

export default PlayMovieBody