import React from 'react'

import { Link } from 'gatsby'
import styles from './style.module.css'
import DiscussionTab from '../../components/DiscussionTab'
import ContentSeparator from '../../components/ContentSeparator'
import Quote from '../../components/Quote'
import Button from '../../components/Button'

const TopicPool = ({topicPoolWhere, separatorText, quoteText, quoteBy}) => {
    if(topicPoolWhere === "forum") {
        return <div className={styles.topic} >
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
                        <Link 
                            to='/forumTema'>
                            <Button activeButton="readMore" />
                        </Link>
                    </div>
                </div>
    }
    else {
        return <div className={styles.topic} >
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
                        <DiscussionTab topicText="rasprava 4" />
                        <DiscussionTab topicText="rasprava 5" />
                        <DiscussionTab topicText="rasprava 6" />
                        <DiscussionTab topicText="rasprava 7" />
                        <DiscussionTab topicText="rasprava 8" />
                        <DiscussionTab topicText="rasprava 9" />
                        <DiscussionTab topicText="rasprava 10" />
                        <DiscussionTab topicText="rasprava ..." />
                        <DiscussionTab topicText="rasprava N" />
                    </div>
                </div>
    }
}

export default TopicPool