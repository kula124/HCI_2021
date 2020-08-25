import React from "react"

import HeaderFooterLayout from "../layouts/headerFooter"
import TitlePage from '../modules/TitlePage'
import PageContent from "../modules/PageContent"

const IndexPage = () => (
  <HeaderFooterLayout>
    <TitlePage />
    <PageContent />
  </HeaderFooterLayout>
)

export default IndexPage