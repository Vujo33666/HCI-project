import React from "react"

import styles from './style.module.css'
import { FaPlay } from "react-icons/fa"

const PlayButton = () => (
    <div className={styles.playButton}>
        <FaPlay size={10} color='rgb(255, 255, 255)'/>
    </div>
)

export default PlayButton