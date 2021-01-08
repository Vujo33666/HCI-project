import React from "react"

import BanerFooterLayout from "../layouts/BanerFooterLayout"
import MovieCardRowExpanded from "../modules/MovieCardRowExpanded"
 
const NaslovnaPage = () => (
    <BanerFooterLayout activeTab="Naslovna">
        <MovieCardRowExpanded
            quoteText = "Happines can be found even in the darkest of times, if one only remembers to turn on the light."
            quoteBy = "- Dumbledore"
        />
        <MovieCardRowExpanded
            quoteText = "Frankly my dear, I don't give a damn."
            quoteBy = "- Rhett Butler"
        />
    </BanerFooterLayout>
)
 
export default NaslovnaPage