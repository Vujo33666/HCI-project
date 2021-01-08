import React from 'react'

import styles from './style.module.css'
import { FaGithub } from "react-icons/fa"

const firstFooterText = `
    Kinoteka je besplatna stranica za stremanje filmova gdje možete bez prijave gledati filmove.`

const secondFooterText = `
    Ova stranica ne posjeduje filmove na svojim serverima nego samo linka korisnicima filmove koji su hostani na serverima treće strane.`

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.logo}>
            LOGO
        </div>
        <div className={styles.verticalLine}/>
        <div className={styles.aboutText}>
            <ul> {firstFooterText} </ul>
            <ul> {secondFooterText} </ul>
            <ul className={styles.makers}>
                <li>
                    <FaGithub size={18} className={styles.gitLogo}/>
                    NediljkoIvisic
                </li>
                <li>
                    <FaGithub size={18} className={styles.gitLogo}/>
                    Vujo33666
                </li>
            </ul>
        </div>
    </footer>
)

export default Footer