import React from "react";
import { Col, Row, Card } from "react-bootstrap";

const MenuList = ({ items }) => {
  return (
    <Row>
        <Col sm="12" className="my-4">
      {items.length >= 1 ? (
        items.map((item) => {
          return (
              <Card key={item.id} className="d-flex flex-row my-3">
                <Col sm="2">

                <Card.Img variant="top" src={item.imgURL} className="img_card" />
                </Col>
                <Col sm="10">
                <Card.Body>
                    <div className="d-flex justify-content-between">
                        <Card.Title>{item.title}</Card.Title>
                        <div className="price">{item.price}</div>
                    </div>
                  <Card.Text>
                   {item.description}
                  </Card.Text>
                </Card.Body>
                </Col>
                
              </Card>
            
          );
        })
      ) : (
        <h2 className="text-center">There are no meals</h2>
      )}
      </Col>
    </Row>
  );
};

export default MenuList;
