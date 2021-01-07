import React, { useState } from 'react'

import styles from './style.module.css'

const ScrollBar = () => {
    const [isChosen, setChosen] = useState(1);

    return (
        <div className={styles.scrollBar}>
            {[...Array(5)].map((barFromScroll, i) => {
                const chosenValue = i + 1;

                return (
                    <li
                        className={chosenValue === isChosen ? styles.active : styles.notActive}
                        onClick={() => setChosen(chosenValue)}
                    />
                )
            })}
        </div>
    )
}

export default ScrollBar