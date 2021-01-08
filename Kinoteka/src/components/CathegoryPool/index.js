import React from 'react'

import styles from './style.module.css'
import Button from '../Button'
import {cath as cathegorys} from '../../constants/const'

const CathegoryPool = ({cathegoryPoolWhere}) => (
    <div className={cathegoryPoolWhere === "landing" ? styles.cathegoryPoolLandingExpanded :  styles.cathegoryPoolExpanded}>  
        <div className={styles.selectedCathegoryWithButton}>
            <div className={styles.selectedCathegory}>
                <div className={styles.selectedCathegoryMessage}>
                    Odabrana kategorija:
                </div>
                <div className={styles.selectedCathegoryName}>
                    Akcijski
                </div>
            </div>
            <Button 
                className ={cathegoryPoolWhere === "landing" ? styles.buttonHide : styles.buttonDrop}
                activeButton = 'dropDownBig'/>
        </div>
        <div className={styles.cathegoryPool} cathegoryPool>
            {
                cathegorys.map(
                    tab => <li className={styles.cathegoryName}>- {tab}</li>
                )
            }
        </div>
    </div>
)

export default CathegoryPool