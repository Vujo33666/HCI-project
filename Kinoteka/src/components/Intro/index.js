import React from 'react'

import styles from './style.module.css'
import SearchBar from '../SearchBar'
import Quote from '../Quote'
import Button from '../Button'
import CathegoryPool from '../CathegoryPool'

const Intro = ({activeIntro}) => {
    let introClassName = ''
    let intro = ''

    if (activeIntro === "landingIntro") {
        introClassName = styles.landingIntro
        intro = <div className={styles.landingIntro}>
                    <h1>
                        <p>LOGO</p>
                        <p>LOGO</p>
                        <p>LOGO</p>
                    </h1>
                    <h2>KINOTEKA</h2>
                    <SearchBar searchBarWhere ="landing" />
                    <Quote 
                        active = "landingQuote"
                        quoteText = "Movies are not about the weekend that they’re released, and in the grand scheme of things, that’s probably the most unimportant time of a film’s life."
                        quoteBy = "- Quentin Tarantino"
                    />
                </div>
    }
    else if (activeIntro === "cathegoryIntro") {
        introClassName = styles.cathegoryIntro
        intro = <div className={styles.cathegoryIntro}>
                    <CathegoryPool cathegoryPoolWhere="landing" textForIntro="Odaberite Kategoriju:"/>
                </div>
    }
    else if (activeIntro === "forumIntro") {
        introClassName = styles.forumIntro
        intro = <div className={styles.forumIntro}>
                    <div className={styles.forumLandingMessage1}>
                        { 'DOBRODOŠLI NA KINOTEKIN FORUM.\n*SMILEY FACE*' }
                    </div>
                    <div className={styles.forumLandingMessage2}>
                        PRIJAVITE SE DA BUDETE NJEGOV DIO.
                    </div>
                    <div className={styles.forumLandingButtons}>
                        <Button activeButton="signInBig" className={styles.forumLandingButton}/>
                        <Button activeButton="signUpBig" className={styles.forumLandingButton}/>
                    </div>
                    <Quote 
                        active = "landingQuote"
                        quoteText = { 'When people ask me if I went to film school I tell them:\n"No, I went to films".' }
                        quoteBy = "- Quentin Tarantino"
                    />
                </div>
    }
    else {
        introClassName = styles.intro
    }

    return  <div className={introClassName}>
        {intro}
    </div>
}

export default Intro