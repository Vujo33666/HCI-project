import React from 'react'

import styles from './style.module.css'
import ContentSeparator from '../ContentSeparator'
import Comments from '../Comments'

const DiscussionCommentsPool = () => (
    <div className={styles.discussionComments}>
        <div className={styles.discussionSeparator}>
            <ContentSeparator separatorText="pronađite film"/>
        </div>
        <div className={styles.discussionCommentsPool} >
            <Comments which='first' commentText="Postavljeno pitanje u raspravi."/>
            <Comments which='' commentText="Prvi odgovor. Svidia mu se film."/>
            <Comments which='' commentText="Drugi odgovor. Nije mu/joj se svidia film i ogadia ga je samo tako. Bože žali uru i po vrimena koje je potrošia na njega. I tako to, nikad blizu više ovom filmu, najveće smeće ikad."/>
            <Comments which='' commentText="Treći odgovor. Film je samo okay, ništa posebno, dobar za ubit vrime."/>
            <Comments which='' commentText="Četvrti odgovor. Neko se doša zajebavat."/>
            <Comments which='write' commentText="Napišite komentar..."/>
        </div>
    </div>
)

export default DiscussionCommentsPool