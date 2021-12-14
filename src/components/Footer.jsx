import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      {/* Make The Footer Center */}
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; Phuclevinh2000
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
