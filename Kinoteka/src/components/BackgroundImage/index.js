import React from 'react'

import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styles from './style.module.css'

import NavigationBar from '../NavigationBar'
import Intro from '../Intro'

const Background = ({activeIntro}) => {
    const data = useStaticQuery(graphql`
    query {
        desktop: file(relativePath: { eq: "Background.png" }) {
            childImageSharp {
                fluid(quality: 100, maxWidth: 1920, maxHeight: 1080) {
                ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `)
    
    return (
        <BackgroundImage
          className={styles.background}
          fluid={data.desktop.childImageSharp.fluid}
        >
            <div>
                <NavigationBar navigationBarWhere = "landing"/>
                <Intro activeIntro={activeIntro}/>
            </div>
        </BackgroundImage>
    )
}

export default Background