import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Header = () => {
  return (
    <Row>
        <Col sm="12" className="my-5">
            <div className='text-center'><h3>Menu Meals</h3></div>
            <div className='mx-auto underline'></div>
        </Col>
    </Row>
  )
}

export default Header