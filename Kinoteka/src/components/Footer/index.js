import React from 'react'

import styles from './style.module.css'

const firstFooterText = `
     `

const secondFooterText = `
    Ova stranica ne posjeduje filmove na svojim serverima nego samo linka korisnicima filmove koji su hostani na serverima treće strane.`

const Footer = () => (
    <footer className={styles.footer}>
        <ul className={styles.logo}>
            <li>LOGO</li>
        </ul>
        <ul className={styles.verticalLine}/>
        <ul className={styles.aboutText}>
            <li>Kinoteka je besplatna stranica za stremanje filmova gdje možete bez prijave gledati filmove.</li>
            <li>Ova stranica ne posjeduje filmove na svojim serverima nego samo linka korisnicima filmove koji su hostani na serverima treće strane.</li>
        </ul>
    </footer>
)

/*
        <ul className={styles.verticalLine}/>
        <ul className={styles.aboutText}>
            <li> firstFooterText </li>
            <li> secondFooterText </li>
        </ul>
*/
  
export default Footer