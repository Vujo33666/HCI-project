import React from 'react'

import Baner from '../components/Baner'
import Footer from '../components/Footer'
 
const BanerFooterLayout = ({children, activeTab}) => (
  <>
    <Baner activeTab={activeTab} navigationBarWhere = "navigation"/>
      {children}
    <Footer />
  </>
)
 
export default BanerFooterLayout