import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const Category = () => {
  return (
    <Row>
        <Col sm="12">
            <div class="d-flex justify-content-center">
                <Button variant="outline-warning" className="mx-2">All</Button>
                <Button variant="outline-warning" className="mx-2">All</Button>
                <Button variant="outline-warning" className="mx-2">All</Button>
                <Button variant="outline-warning" className="mx-2">All</Button>
            </div>
        </Col>
    </Row>
  )
}

export default Category