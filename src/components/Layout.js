import React from 'react'
import {LayoutWrapper, PageContainer} from './../Styles/LayoutWrapper'


export default function Layout({ children }) {
  const location = window.location.pathname.slice(1) 
  const isBlog = location === 'blog'

  return (
    <LayoutWrapper>
        <PageContainer className={isBlog ? "full" : null} >
          {children}
        </PageContainer>
    </LayoutWrapper>

  )
}
