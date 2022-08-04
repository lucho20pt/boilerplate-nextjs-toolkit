import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from 'components/layout/Footer'
import Header from 'components/layout/Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <Container fluid>{children}</Container>

      <Footer />
    </>
  )
}

export default Layout
