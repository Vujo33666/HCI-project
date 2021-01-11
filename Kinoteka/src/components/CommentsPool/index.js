import React from 'react'

import styles from './style.module.css'
import Comments from '../Comments'

const CommentsPool = () => (
    <div className={styles.commentsPool} >
        <Comments which='' commentText="Prvi odgovor. Svidia mu se film."/>
        <Comments which='' commentText="Drugi odgovor. Nije mu/joj se svidia film i ogadia ga je samo tako. Bože žali uru i po vrimena koje je potrošia na njega."/>
        <Comments which='' commentText="Treći odgovor. Film je samo okay, ništa posebno, dobar za ubit vrime."/>
        <Comments which='' commentText="Četvrti odgovor. Neko se doša zajebavat."/>
        <Comments which='write' commentText="Napišite komentar..."/>
    </div>
)

export default CommentsPool