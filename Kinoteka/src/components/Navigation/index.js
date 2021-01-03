import React from 'react'

import styles from './style.module.css'
import NavigationBar from '../NavigationBar'
import Logo from '../Logo'

const Navigation = ({activeTab}) => (
  <section className={styles.navigation}>
    <NavigationBar activeTab={activeTab} />
  </section>
)

export default Navigation