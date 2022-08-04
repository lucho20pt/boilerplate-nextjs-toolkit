import React from 'react'
import styles from 'styles/layout/Footer.module.scss'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className={`${styles.footer} ${'text-center'}`}>
      <Container>
        <Row>
          <Col>footer</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
