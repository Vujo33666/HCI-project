import React from 'react'

import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styles from './style.module.css'

import { FaPlayCircle } from "react-icons/fa"

const PlayMoviePicture = () => {
    const data = useStaticQuery(graphql`
    query {
        desktop: file(relativePath: { eq: "JOJO_RABBIT_PLAY.jpg" }) {
            childImageSharp {
                fluid(quality: 100, maxWidth: 1600, maxHeight: 800) {
                ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `)
    
    return (
        <BackgroundImage
          className={styles.playMovieImage}
          fluid={data.desktop.childImageSharp.fluid}
        >
            <div className={styles.playButtonCover}>
                <FaPlayCircle className={styles.playCircleButton} size={120} color='rgba(212, 175, 55, 0.9)' />
            </div>
        </BackgroundImage>
    )
}

export default PlayMoviePicture