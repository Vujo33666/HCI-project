import React from 'react'
 
import Background from '../../components/BackgroundImage'
import NavigationBar from '../../components/navigationBar'
import styles from './style.module.css'
 
const Landing = ({activeIntro}) => (
    <section className={styles.landing}>
        <Background activeIntro={activeIntro}/>
    </section>
)
 
export default Landing