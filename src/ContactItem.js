import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ContactItem = () => {
  return (
    <Row>
      <Col lg={2}>
        <img 
            width={50}
            src='https://www.transparentpng.com/thumb/user/blue-male-user-profile-transparent-png-2lbgMx.png'
        />
      </Col>
      <Col lg={10}>
        <div>김구이</div>
        <div>01012345678</div>
      </Col>
    </Row>
    
  )
}

export default ContactItem
