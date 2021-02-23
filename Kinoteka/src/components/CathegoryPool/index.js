import React, { useState } from 'react'

import { Link } from 'gatsby'
import styles from './style.module.css'
import Button from '../Button'
import {cath as cathegorys} from '../../constants/const'

const CathegoryPool = ({cathegoryPoolWhere, textForIntro}) => {
    const [isActive, setValue] = useState(false);
    const [movie,setMovie] = useState("akcijski");

    const handleMouseClick = () => {
        setValue(!isActive)
    }

    const settingMovieCategory=()=>{
        setMovie(movie);
    }

    return (
        <div className={cathegoryPoolWhere === "landing" ? styles.cathegoryPoolLandingExpanded : styles.cathegoryPoolExpanded}>  
            <div className={styles.selectedCathegoryWithButton}>
                <div className={styles.selectedCathegory}>
                    <div className={styles.selectedCathegoryMessage}>
                        {textForIntro}
                    </div>
                    <div className={cathegoryPoolWhere === "landing" ? styles.selectedCathegoryNameHide : styles.selectedCathegoryName}>
                        {movie}
                    </div>
                </div>
                <Button
                    activeButton = {cathegoryPoolWhere === "landing" ? '' : 'dropDown'}
                    onClick = {() => setValue(!isActive)}
                />
            </div>
            <div className={
                    ((isActive)||(cathegoryPoolWhere === "landing")) === true ? styles.cathegoryPool : styles.cathegoryPoolHide
                }
            >

                {
                    cathegorys.map(
                        tab => (
                            <Link key={tab} to='/kategorije'>
                                <li className={styles.cathegoryName}>
                                    - {tab}
                                </li>
                            </Link>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default CathegoryPool