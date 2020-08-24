import React from 'react'
import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'

const HeaderFooterLayout = ({children}) => (
    <>
        <NavigationHeader />
          {children}
        <Footer />
    </>
)

export default HeaderFooterLayout