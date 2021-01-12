import React from "react"

import HeaderFooterLayout from "../layouts/HeaderFooterLayout"
import TopicPool from "../modules/TopicPool"
import Quote from "../components/Quote"
 
const ForumTopicPage = () => (
    <HeaderFooterLayout activeTab="Forum">
        <Quote 
            quoteText="A good film is when the price of the dinner, the theatre admission and the baby sitter were worth it."
            quoteBy="- Alfred Hitchcock"
        />
        <TopicPool
            separatorText="pronađite film"
            quoteText={"They laught at me because I'm different.\nI laught at them because they're all the same."}
            quoteBy="- Joker"
        />
    </HeaderFooterLayout>
)
 
export default ForumTopicPage