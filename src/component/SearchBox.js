import React from 'react'
import { Button } from 'react-bootstrap'
import { Row, Col, Form } from 'react-bootstrap'

const SearchBox = () => {
  return (
    <div>
      <Row>
          <Col lg={10}>
            <Form.Control type="text" placeholder="이름을 입력해주세요" />
          </Col>
          <Col lg={10}>
            <Button>찾기</Button>
          </Col>
      </Row>
    </div>
  )
}

export default SearchBox