import React from 'react'

import styles from './style.module.css'

/*
import {buttons} from '../../constants/const'
*/

export const buttons = [
    'signIn',
    'signUp',
    'edit',
    'watchNow',
    'watchLater',
    'addToFavourites',
    'dropDown',
    'readMore',
]

const Button = ({activeButton}) => (
    <button className={styles.button}/>
)

export default Button