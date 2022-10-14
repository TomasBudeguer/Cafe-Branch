import { Col, Card, Button } from "react-bootstrap";

const CardProducto = ({ producto, setProductos }) => {
  return (
    <Col sm={12} md={4} lg={3}>
      <Card className="mb-4">
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title>{producto.nombreProducto}</Card.Title>
          <Card.Text>
            Precio: ${producto.precio}
          </Card.Text>
            <hr />
          <Button variant="danger">Ver más</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;
