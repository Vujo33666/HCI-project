import React from 'react'

import styles from './style.module.css'
import Button from '../Button'
import InfoTab from '../InfoTab'

const PrijavaForm = () => (
    <div className={styles.prijava}>
        <InfoTab text="Korisničko ime:"/>
        <InfoTab text="Lozinka:"/>
        <Button activeButton="signIn"/>
        <div className={styles.introMessageSignIn}>
            NEMATE RAČUN? REGISTRIRAJTE SE 😊
        </div>
    </div>
)

export default PrijavaForm