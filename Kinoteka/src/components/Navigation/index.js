import React from 'react'

import { Link } from 'gatsby'
import styles from './style.module.css'
import Logo from '../Logo'
import NavigationBar from '../NavigationBar'
import SearchBar from '../SearchBar'

const Navigation = ({activeTab, navigationBarWhere}) => (
  <section className={styles.navigation}>
    <div className={styles.navLogoSiteName}>
        <Link to='/'>
            <Logo logoWhere='navigationLogo'/>
        </Link>
        <Link to='/'>
            <h2>KINOTEKA</h2>
        </Link>
    </div>
    <NavigationBar activeTab={activeTab} navigationBarWhere = {navigationBarWhere}/>
    <SearchBar searchBarWhere="navigation" />
  </section>
)

export default Navigation