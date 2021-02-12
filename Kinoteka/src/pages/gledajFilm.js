import React from "react"
import { movieObj } from "../firebase/getBanner"

import HeaderFooterLayout from "../layouts/HeaderFooterLayout"
import PlayMovieBody from "../modules/PlayMovieBody"
 
const KategorijePage = () => (

    <HeaderFooterLayout activeTab="">
        <PlayMovieBody />
    </HeaderFooterLayout>
)
 
export default KategorijePage