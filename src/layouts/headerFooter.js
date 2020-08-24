import React from 'react'
import NavigationHeader from '../modules/NavigationHeader'
import Footer from '../modules/Footer'

const HeaderFooterLayout = ({children}) => (
    <>
        <NavigationHeader />
          {children}
        <Footer />
    </>
)

export default HeaderFooterLayout