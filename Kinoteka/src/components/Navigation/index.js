import React from 'react'

import styles from './style.module.css'
import NavigationBar from '../NavigationBar'
import SearchBar from '../SearchBar'

const Navigation = ({activeTab, navigationBarWhere}) => (
  <section className={styles.navigation}>
    <div className={styles.navLogoSiteName}>
      <h1>LOGO</h1>
      <h2>KINOTEKA</h2>
    </div>
    <NavigationBar activeTab={activeTab} navigationBarWhere = {navigationBarWhere}/>
    <SearchBar searchBarWhere="navigation" />
  </section>
)

export default Navigation