import React from 'react'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
 
const HeaderFooterLayout = ({children, activeTab}) => (
  <>
    <Navigation activeTab={activeTab} navigationBarWhere = "navigation"/>
      {children}
    <Footer />
  </>
)
 
export default HeaderFooterLayout