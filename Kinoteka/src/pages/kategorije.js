import React from "react"

import HeaderFooterLayout from "../layouts/HeaderFooterLayout"
import MovieCardRowExpanded from "../modules/MovieCardRowExpanded"
 
const KategorijePage = () => (
    <HeaderFooterLayout activeTab="Kategorije">
        <MovieCardRowExpanded />
        <MovieCardRowExpanded />
    </HeaderFooterLayout>
)
 
export default KategorijePage