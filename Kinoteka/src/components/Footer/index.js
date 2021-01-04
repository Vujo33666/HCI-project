import React from 'react'

import styles from './style.module.css'

const firstFooterText = `
Kinoteka je besplatna stranica za stremanje filmova gdje možete bez prijave gledati filmove.`

const secondFooterText = `
    Ova stranica ne posjeduje filmove na svojim serverima nego samo linka korisnicima filmove koji su hostani na serverima treće strane.`

const Footer = () => (
    <footer className={styles.footer}>
        <ul className={styles.logo}>
            <li>LOGO</li>
        </ul>
        <ul className={styles.verticalLine}/>
        <ul className={styles.aboutText}>
            <li> {firstFooterText} </li>
            <li> {secondFooterText} </li>
        </ul>
    </footer>
)
  
export default Footer