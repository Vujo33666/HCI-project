import React from 'react'

import { Link } from 'gatsby'
import styles from './style.module.css'
import {navs as navigationTabs} from '../../constants/const'

const NavigationBar = ({activeTab, navigationBarWhere}) => (
    <nav className={navigationBarWhere === "navigation" ? styles.navigationBarNav :  styles.navigationBar}>  
        {
            navigationTabs.map(({tab,to}) => (
                <Link to={to}>
                    <li key={tab} className={tab === activeTab ? styles.active : styles.navLiTab}>
                        {tab}
                    </li>
                </Link>
            ))
        }
    </nav>
)

export default NavigationBar