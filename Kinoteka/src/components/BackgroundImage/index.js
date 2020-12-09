import React from 'react'

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
        <div class style={{maxWidth: "1920px", minWidth: "500px"}}> 
            <Img fluid={data.myImage.childImageSharp.fluid} />
        </div>
    )
}

export default Background