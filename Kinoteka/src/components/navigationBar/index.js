import React from 'react'

import styles from './style.module.css'
import {navs as navigationTabs} from '../../constants/const'

const NavigationBar = ({activeTab, navigationBarWhere}) => (
    <nav className={navigationBarWhere === "navigation" ? styles.navigationBarNav :  styles.navigationBar}>  
        {
            navigationTabs.map(
                tab => <li className={tab === activeTab ? styles.active : styles.navLiTab}>{tab}</li>
            )
        }
    </nav>
)

export default NavigationBar