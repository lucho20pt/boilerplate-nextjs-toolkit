import React from 'react'
import Navbar from 'components/layout/Navbar'
import styles from 'styles/layout/header.module.scss'
import { Container, Row, Col } from 'react-bootstrap'

const Header = () => {
  return (
    <header className={`${styles.header} ${'p-3'}`}>
      <Container>
        <Navbar />
      </Container>
    </header>
  )
}

export default Header
