import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          <Link className="btn btn-danger"to={`/detalle-producto/${producto.id}`}>Ver más</Link>        
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;
