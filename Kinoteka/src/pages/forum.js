import React from "react"

import HeaderFooterLayout from "../layouts/HeaderFooterLayout"
import TopicPool from "../modules/TopicPool"
 
const ForumPage = () => (
    <HeaderFooterLayout activeTab="Forum">
        <TopicPool
            separatorText="pronađite film"
            quoteText={"They laught at me because I'm different.\nI laught at them because they're all the same."}
            quoteBy="- Joker"
            topicPoolWhere="forum"
        />
        <TopicPool
            separatorText="predložite film"
            quoteText="Hope is a good thing, maybe the best of things, and no good thing ever dies."
            quoteBy="- Andy Dufresne"
            topicPoolWhere="forum"
        />
        <TopicPool
            separatorText="raspravljajte o filmu"
            quoteText="Never underestimate the stupidity of idiots."
            quoteBy="- Deadpool"
            topicPoolWhere="forum"
        />
        <TopicPool
            separatorText="raspravljajte o glumcima"
            quoteText={"Hello!\nMy name is Inigo Montoya.\nYou killed my father.\nPrepare to die."}
            quoteBy="- Inigo Montoya "
            topicPoolWhere="forum"
        />
        <TopicPool
            separatorText="dodjele nagrada"
            quoteText="The greatest trick the Devil ever pulled was convincing the world he didn't exist."
            quoteBy="- Verbal "
            topicPoolWhere="forum"
        />
        <TopicPool
            separatorText="ostalo"
            quoteText={"Life is like a box of chocolates.\nYou never know what you're gonna get."}
            quoteBy="-  Forrest Gump "
            topicPoolWhere="forum"
        />
    </HeaderFooterLayout>
)
 
export default ForumPage