import { Card, Col, Container, Row, Badge } from "react-bootstrap";

const DetalleProducto = () => {
  return (
    <Container className="my-4">    
    <Card>
      <Card.Body>
        <Row>
          <Col sm={12} md={4}>
          <img
              src='https://es.cravingsjournal.com/wp-content/uploads/2022/05/brownies-melcochudos-4.jpg'
              alt='brownie'
              className="w-100"
            />
          </Col>
          <Col sm={12} md={8}>
          <Card.Title>
              <h3>Brownie</h3>
              <hr />
            </Card.Title>
            <Card.Text className="d-flex flex-column">
                <aside>
            <Badge bg="success">Duke</Badge>
                </aside>
                <aside>
            Precio: $300
                </aside>
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
    </Container>
  );
};

export default DetalleProducto;
