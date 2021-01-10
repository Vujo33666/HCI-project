import React from 'react'

import styles from './style.module.css'
import PlayMoviePicture from '../../components/PlayMovieBackground'

const PlayMovieBody = () => (
    <div className={styles.playMovieBody} >
        <PlayMoviePicture />
    </div>
)

export default PlayMovieBody