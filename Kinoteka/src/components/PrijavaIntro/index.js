import React from 'react'

import styles from './style.module.css'
import Button from '../Button'
import InfoTab from '../InfoTab'

const PrijavaIntro = () => (
    <div className={styles.prijavaRegistracijaIntro}>
        <div className={styles.prijava}>
            <InfoTab text="Korisničko ime:"/>
            <InfoTab text="Lozinka:"/>
            <Button activeButton="signIn"/>
            <div className={styles.introMessageSignIn}>
                NEMATE RAČUN? REGISTRIRAJTE SE. *SMILEY FACE*
            </div>
        </div>
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
)

export default PrijavaIntro