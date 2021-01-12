import React from 'react'

import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styles from './style.module.css'

import NavigationBar from '../NavigationBar'
import Navigation from '../Navigation'
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

    let intro = ''

    if (activeIntro === "landingIntro") {
        intro =
            <BackgroundImage
                className={styles.background}
                fluid={data.desktop.childImageSharp.fluid}
            >
                <div>
                    <NavigationBar navigationBarWhere = "landing"/>
                    <Intro activeIntro={activeIntro}/>
                </div>
            </BackgroundImage>
    }
    else {
        intro =
            <BackgroundImage
                className={styles.background}
                fluid={data.desktop.childImageSharp.fluid}
            >
                <div>
                    <Navigation navigationBarWhere = "navigation"/>
                    <Intro activeIntro={activeIntro}/>
                </div>
            </BackgroundImage>
    }

    return intro
}

export default Background