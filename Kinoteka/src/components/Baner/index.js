import React from 'react'

import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styles from './style.module.css'

import Navigation from '../Navigation'

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
                        movie Duration
                    </ul>
                    <ul className={styles.movieRating}>
                        movie Rating
                    </ul>
                    <ul  className={styles.watchNow}>
                        watch Now
                    </ul>
                    <ul  className={styles.banerScroll}>
                        baner Scroll
                    </ul>
                    <ul  className={styles.banerBodySeparator}>
                        baner Body Separator
                    </ul>
                </section>
            </div>
        </BackgroundImage>
    )
}

export default Baner