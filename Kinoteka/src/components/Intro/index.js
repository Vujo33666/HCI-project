import React from 'react'

import { Link } from 'gatsby'
import styles from './style.module.css'
import Logo from '../Logo'
import SearchBar from '../SearchBar'
import Quote from '../Quote'
import Button from '../Button'
import CathegoryPool from '../CathegoryPool'
import InfoTab from '../InfoTab'
import UserLists from '../UserLists'
import PrijavaForm from '../PrijavaForm'

const Intro = ({activeIntro}) => {
    let introClassName = ''
    let intro = ''

    if (activeIntro === "landingIntro") {
        intro = <div className={styles.landingIntro}>
                    <Logo />
                    <h1>KINOTEKA</h1>
                    <SearchBar searchBarWhere ="landing" />
                    <Quote 
                        active = "landingQuote"
                        quoteText = "Movies are not about the weekend that they’re released, and in the grand scheme of things, that’s probably the most unimportant time of a film’s life."
                        quoteBy = "- Quentin Tarantino"
                    />
                </div>
    }
    else if (activeIntro === "cathegoryIntro") {
        intro = <div className={styles.cathegoryIntro}>
                    <CathegoryPool cathegoryPoolWhere="landing" textForIntro="Odaberite Kategoriju:"/>
                </div>
    }
    else if (activeIntro === "forumIntro") {
        intro = <div className={styles.forumIntro}>
                    <div className={styles.forumLandingMessage1}>
                        { 'DOBRODOŠLI NA KINOTEKIN FORUM.\n*SMILEY FACE*' }
                    </div>
                    <div className={styles.forumLandingMessage2}>
                        PRIJAVITE SE DA BUDETE NJEGOV DIO.
                    </div>
                    <div className={styles.forumLandingButtons}>
                        <Link to='/prijavaRegistracija'>
                            <Button activeButton="signIn" className={styles.forumLandingButton}/>
                        </Link>
                        <Link to='/prijavaRegistracija'>
                            <Button activeButton="signUp" className={styles.forumLandingButton}/>
                        </Link>
                    </div>
                    <Quote 
                        active = "landingQuote"
                        quoteText = { 'When people ask me if I went to film school I tell them:\n"No, I went to films".' }
                        quoteBy = "- Quentin Tarantino"
                    />
                </div>
    }
    else if (activeIntro === "prijavaRegistracija") {
        intro = <div className={styles.prijavaRegistracijaIntro}>
                    <PrijavaForm />
                    <div className={styles.verticalLine} />
                    <div className={styles.registracija}>
                        <InfoTab text="Ime:"/>
                        <InfoTab text="Prezime:"/>
                        <InfoTab text="Email:"/>
                        <InfoTab text="Korisničko ime:"/>
                        <InfoTab text="Lozinka:"/>
                        <Button activeButton="signUp"/>
                    </div>
                </div>
    }
    else if (activeIntro === "korisnickiProfil") {
        intro = <div className={styles.korisnickiProfilIntro}>
                    <div className={styles.userInfo}>
                        <div className={styles.pictureName}>
                            <div className={styles.profilePicture}>
                                {'*profile\npicture*'}
                            </div>
                            <div className={styles.profileName}>
                                korisničko ime
                            </div>
                        </div>
                        <div className={styles.emailTab}>
                            email adresa
                        </div>
                        <Button activeButton="edit" />
                    </div>
                    <div className={styles.verticalLine} />
                    <div className={styles.userLists}>
                        <UserLists listText="lista za gledanje" />
                        <UserLists listText="nedavno pogledano" />
                        <UserLists listText="omiljeni filmovi" />
                    </div>
                </div>
    }
    else {
        introClassName = styles.intro
    }

    return  intro
}

export default Intro