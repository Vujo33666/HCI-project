import React from 'react'

import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styles from './style.module.css'

import Navigation from '../Navigation'
import Rate from '../Rate'
import Button from '../Button'
import ScrollBar from '../ScrollBar'

const Baner = ({activeTab, navigationBarWhere}) => {
    const data = useStaticQuery(graphql`
    query {
        desktop: file(relativePath: { eq: "JOJO_RABBIT_BANER.jpg" }) {
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
            <div className={styles.banerBackground}>
                <Navigation activeTab={activeTab} navigationBarWhere={navigationBarWhere}/>
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
                    </ul>
                    <ul  className={styles.watchNow}>
                        <Button activeButton = "watchNowBig"/>
                    </ul>
                    <ul  className={styles.banerScroll}>
                        <ScrollBar />
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