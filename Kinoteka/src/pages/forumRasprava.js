import React from "react"

import HeaderFooterLayout from "../layouts/HeaderFooterLayout"
import Quote from "../components/Quote"
 
const ForumDiscussionPage = () => (
    <HeaderFooterLayout activeTab="Forum">
        <Quote 
            quoteText="A good film is when the price of the dinner, the theatre admission and the baby sitter were worth it."
            quoteBy="- Alfred Hitchcock"
        />
    </HeaderFooterLayout>
)
 
export default ForumDiscussionPage