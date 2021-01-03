import React from 'react'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
 
const HeaderFooterLayout = ({activeTab}) => (
  <>
    <Navigation activeTab={activeTab} />
    <Footer />
  </>
)
 
export default HeaderFooterLayout