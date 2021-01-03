import React from 'react'

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from './style.module.css'

const Background = () => {
    const data = useStaticQuery(graphql`
    query {
        myImage: file(relativePath: { eq: "Background.png" }) {
            childImageSharp {
                fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `)
    
    return (
        <div className={styles.background}>
            <Img fluid={data.myImage.childImageSharp.fluid} />
        </div>
    )
}

export default Background