import React from 'react'

import styles from './style.module.css'
import DiscussionTab from '../../components/DiscussionTab'
import ContentSeparator from '../../components/ContentSeparator'
import Quote from '../../components/Quote'
import Button from '../../components/Button'

const TopicPool = ({topicPoolWhere, separatorText, quoteText, quoteBy}) => (
    <div className={styles.topic} >
        <div className={styles.topicSeparator} >
            <ContentSeparator separatorText={separatorText}/>
        </div>
        <div className={styles.topicPool} >
            <Quote 
                active="playMovie"
                quoteText={quoteText}
                quoteBy={quoteBy}
            />
            <DiscussionTab topicText="rasprava 1" />
            <DiscussionTab topicText="rasprava 2" />
            <DiscussionTab topicText="rasprava 3" />
            <Button activeButton="readMore" />
        </div>
    </div>
)

export default TopicPool