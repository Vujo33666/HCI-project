import React from 'react'

import styles from './style.module.css'
import { FaGithub } from "react-icons/fa"

import { Link } from 'gatsby'

const firstFooterText = `
    Kinoteka je besplatna stranica za stremanje filmova gdje možete bez prijave gledati filmove.`

const secondFooterText = `
    Ova stranica ne posjeduje filmove na svojim serverima nego samo linka korisnicima filmove koji su hostani na serverima treće strane.`

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.logo} >
            <Link to="/">
                <div className={styles.logoImage}></div>
            </Link>
        </div>
        <div className={styles.verticalLine}/>
        <div className={styles.aboutText}>
            <ul> {firstFooterText} </ul>
            <ul> {secondFooterText} </ul>
            <ul className={styles.makers}>
                <li>
                    <FaGithub size={18} className={styles.gitLogo}/>
                    <a href="https://github.com/NediljkoIvisic" target="_blank">NediljkoIvisic</a>
                </li>
                <li>
                    <FaGithub size={18} className={styles.gitLogo}/>
                    <a href="https://github.com/Vujo33666" target="_blank">Vujo33666</a>
                </li>
            </ul>
        </div>
    </footer>
)

export default Footer