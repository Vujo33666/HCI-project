import React from 'react'

import styles from './style.module.css'

const navigationTabs = ['Naslovna', 'Kategorije', 'Forum', 'Prijava']

const NavigationBar = props => (
    <nav className={styles.navigationBar}>  
        {
            navigationTabs.map(
                tab => <li className={tab === props.activeTab ? styles.active : ''}>{tab}</li>
            )
        }
    </nav>
)
export default NavigationBar