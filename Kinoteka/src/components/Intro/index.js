import React from 'react'

import styles from './style.module.css'
import SearchBar from '../SearchBar'

const Intro = ({activeIntro}) => {
    let introClassName = ''
    let introText = "HELLO"
    let introExtra = ''

    if (activeIntro === "landingIntro") {
        introClassName = styles.landingIntro
        introText = ''
        introExtra = <SearchBar/>
    }
    else if (activeIntro === "cathegoryIntro") {
        introClassName = styles.cathegoryIntro
    }
    else if (activeIntro === "forumIntro") {
        introClassName = styles.forumIntro
    }
    else {
        introClassName = styles.intro
    }

    return  <div className={introClassName}>
        {introText}
        {introExtra}
    </div>
}

export default Intro