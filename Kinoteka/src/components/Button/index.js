import React from 'react'

import styles from './style.module.css'
import { FaHeart } from "react-icons/fa"
import { FaPlayCircle } from "react-icons/fa"
import PlayButton from '../PlayButton'

const Button = ({onClick, activeButton}) => {
    let buttonClassName = ''
    let buttonText = "Submit"
    let buttonExtras = ""

    if (activeButton === "signIn") {
        buttonClassName = styles.signIn
        buttonText = "prijava"
    }
    else if (activeButton === "signInBig") {
        buttonClassName = styles.signInBig
        buttonText = "prijava"
    }
    else if (activeButton === "signUp") {
        buttonClassName = styles.signUp
        buttonText = "registracija"
    }
    else if (activeButton === "signUpBig") {
        buttonClassName = styles.signUpBig
        buttonText = "registracija"
    }
    else if (activeButton === "edit") {
        buttonClassName = styles.edit
        buttonText = "uredi"
    }
    else if (activeButton === "watchNow") {
        buttonClassName = styles.watchNow
        buttonText = "gledaj sada"
        buttonExtras = <PlayButton/>
    }
    else if (activeButton === "watchNowBig") {
        buttonClassName = styles.watchNowBig
        buttonText = "gledaj sada"
        buttonExtras = <FaPlayCircle size={30} className={styles.playCircle}/>
    }
    else if (activeButton === "watchLater") {
        buttonClassName = styles.watchLater
        buttonText = "gledaj kasnije"
    }
    else if (activeButton === "addToFavourites") {
        buttonClassName = styles.addToFavourites
        buttonText = "favoriti"
        buttonExtras = <FaHeart size={16} color='rgb(200, 50, 50)'/>
    }
    else if (activeButton === "dropDown") {
        buttonClassName = styles.dropDown
        buttonText = ""
        buttonExtras = <ul>
            <li className={styles.verticalLine}/>
            <li className={styles.verticalLine}/>
            <li className={styles.verticalLine}/>
        </ul>
    }
    else if (activeButton === "dropDownBig") {
        buttonClassName = styles.dropDownBig
        buttonText = ""
        buttonExtras = <ul>
            <li className={styles.verticalLine}/>
            <li className={styles.verticalLine}/>
            <li className={styles.verticalLine}/>
        </ul>
    }
    else if (activeButton === "readMore") {
        buttonClassName = styles.readMore
        buttonText = "pročitaj više"
    }
    else {
        buttonClassName = styles.button
        buttonText = ""
    }

    return <button 
        onClick = {onClick}
        className={buttonClassName}
    >
        {buttonExtras}
        {buttonText}
    </button>
}

export default Button