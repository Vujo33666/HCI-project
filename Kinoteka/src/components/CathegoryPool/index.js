import React, { useState } from 'react'

import styles from './style.module.css'
import Button from '../Button'
import {cath as cathegorys} from '../../constants/const'

const CathegoryPool = ({cathegoryPoolWhere, textForIntro}) => {
    const [isActive, setValue] = useState(false);

    const handleMouseClick = () => {
        setValue(!isActive)
    }

    return (
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
                    activeButton = {cathegoryPoolWhere === "landing" ? '' : 'dropDownBig'}
                    onClick = {() => setValue(!isActive)}
                />
            </div>
            <div className={
                    ((isActive)||(cathegoryPoolWhere === "landing")) === true ? styles.cathegoryPool : styles.cathegoryPoolHide
                }
            >

                {
                    cathegorys.map(
                        tab =>  <li key={tab}
                                    className={styles.cathegoryName}
                                >
                                        - {tab}
                                </li>
                    )
                }
            </div>
        </div>
    )
}

export default CathegoryPool