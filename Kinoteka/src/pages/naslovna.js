import React from "react"

import HeaderFooterLayout from "../layouts/HeaderFooterLayout"
import MovieCardRowExpanded from "../modules/MovieCardRowExpanded"
 
const NaslovnaPage = () => (
    <HeaderFooterLayout activeTab="Naslovna">
        <MovieCardRowExpanded />
        <MovieCardRowExpanded />
    </HeaderFooterLayout>
)
 
export default NaslovnaPage