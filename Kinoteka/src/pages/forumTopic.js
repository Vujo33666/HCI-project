import React from "react"

import HeaderFooterLayout from "../layouts/HeaderFooterLayout"
import TopicPool from "../modules/TopicPool"
 
const ForumTopicPage = () => (
    <HeaderFooterLayout activeTab="Forum">
        <TopicPool
            separatorText="pronađite film"
            quoteText={"They laught at me because I'm different.\nI laught at them because they're all the same."}
            quoteBy="- Joker"
        />
    </HeaderFooterLayout>
)
 
export default ForumTopicPage