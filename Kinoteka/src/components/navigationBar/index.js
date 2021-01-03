import React from 'react'

import styles from './style.module.css'
import {navs as navigationTabs} from '../../constants/const'

const NavigationBar = ({activeTab}) => (
    <nav className={styles.navigationBar}>  
        {
            navigationTabs.map(
                tab => <li className={tab === activeTab ? styles.active : ''}>{tab}</li>
            )
        }
    </nav>
)

export default NavigationBar