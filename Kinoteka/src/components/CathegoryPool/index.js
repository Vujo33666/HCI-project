import React from 'react'

import styles from './style.module.css'
import Button from '../Button'
import {cath as cathegorys} from '../../constants/const'

const CathegoryPool = ({cathegoryPoolWhere, textForIntro}) => (
    <div className={cathegoryPoolWhere === "landing" ? styles.cathegoryPoolLandingExpanded : styles.cathegoryPoolExpanded}>  
        <div className={styles.selectedCathegoryWithButton}>
            <div className={styles.selectedCathegory}>
                <div className={styles.selectedCathegoryMessage}>
                    {textForIntro}
                </div>
                <div className={cathegoryPoolWhere === "landing" ? styles.selectedCathegoryNameHide : styles.selectedCathegoryName}>
                    Akcijski
                </div>
            </div>
            <Button 
                className ={styles.buttonDrop}
                activeButton = {cathegoryPoolWhere === "landing" ? '' : 'dropDownBig'}/>
        </div>
        <div className={styles.cathegoryPool}>
            {
                cathegorys.map(
                    tab => <li className={styles.cathegoryName}>- {tab}</li>
                )
            }
        </div>
    </div>
)

export default CathegoryPool