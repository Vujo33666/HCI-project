import React from 'react'

import styles from './style.module.css'
import Quote from '../../components/Quote'
import PlayMoviePicture from '../../components/PlayMovieBackground'
import Rate from '../../components/Rate'
import Button from '../../components/Button'
import CommentsPool from '../../components/CommentsPool'
import ContentSeparator from '../../components/ContentSeparator'

const PlayMovieBody = () => (
    <div className={styles.playMovieBody} >
        <Quote 
            quoteText = { 'Jojo’s mom: “Love is the strongest thing in the world.”\nJojo: “I think you will find that metal is the strongest thing in the world, followed closly by dynamite and then muscles.”' }
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
                <ul className={styles.movieAddButtons}>
                    <Button 
                        className={styles.movieAddButton}
                        activeButton="watchLater"
                    />
                    <Button 
                        className={styles.movieAddButton}
                        activeButton="addToFavourites"
                    />
                </ul>
            </section>
            <section className={styles.movieDescription}>
                Movie Description...
            </section>
        </div>
        <div className={styles.commentsSection}>
            <div className={styles.cantSeeCommentsMessage}>
                *komentari su onemogućeni za neprijavljene korisnike*
            </div>
            <ContentSeparator separatorText="komentari" className={styles.contentSeparator}/>
            <CommentsPool />
        </div>
    </div>
)

export default PlayMovieBody