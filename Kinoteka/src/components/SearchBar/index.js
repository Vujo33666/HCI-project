import React, { useState } from 'react'

import styles from './style.module.css'

const SearchBar = ({searchBarWhere}) => {
    const [isInputing, setIsInput] = useState(false);

    return (
        <div className={searchBarWhere === "landing" ? styles.searchBarLanding :  styles.searchBarNav}>  
            <div    onMouseEnter={() => setIsInput(true)}
                    onMouseLeave={() => setIsInput(false)}
                    className={styles.searchBarInput}>
                        <div className = {isInputing === false ? styles.leadingText : styles.leadingTextHide}>
                            Pretražite željeni film...
                        </div>
            </div>
            <button className={styles.searchButton}>
                traži
            </button>
        </div>
    )
}

export default SearchBar