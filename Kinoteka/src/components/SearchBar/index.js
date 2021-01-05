import React from 'react'

import styles from './style.module.css'

const SearchBar = () => (
    <div className={styles.searchBar}>  
        <div className={styles.searchBarInput}>
            <div className={styles.leadingText}>
                Pretražite željeni film...
            </div>
        </div>
        <button className={styles.searchButton}>
            traži
        </button>
    </div>
)

export default SearchBar