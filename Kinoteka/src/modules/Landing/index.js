import React from 'react'

import Background from '../../components/BackgroundImage'
import styles from './style.module.css'

const Landing = ({activeTab, activeIntro}) => (
    <section className={styles.landing}>
        <Background
            activeTab={activeTab}
            activeIntro={activeIntro}
        />
    </section>
)
 
export default Landing