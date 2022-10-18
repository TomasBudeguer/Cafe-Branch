import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { obtenerProductoAPI } from "../helpers/queries";

const DetalleProducto = () => {
  const [nombreProducto, setNombreProducto] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");
  const [categoria, setCategoria] = useState("");
  const { id } = useParams();

  useEffect(() => {
    obtenerProductoAPI(id).then((respuesta) => {
      if (respuesta.status === 200) {
        setNombreProducto(respuesta.dato.nombreProducto);
        setPrecio(respuesta.dato.precio);
        setImagen(respuesta.dato.imagen);
        setCategoria(respuesta.dato.categoria);
      } else {
        Swal.fire(
          "Ocurrio un error",
          "Intente este paso en unos minutos",
          "error"
        );
      }
    });
  }, []);

  return (
    <Container className="my-4">
      <Card>
        <Card.Body>
          <Row>
            <Col sm={12} md={4}>
              <img src={imagen} alt={nombreProducto} className="w-100" />
            </Col>
            <Col sm={12} md={8}>
              <Card.Title className="mt-2">
                <h3>{nombreProducto}</h3>
              </Card.Title>
              <hr />
              <div className="d-flex flex-column">
                <aside className="mb-2">
                  <Badge bg="success">{categoria}</Badge>
                </aside>
                <aside>
                  <Card.Subtitle>Precio: ${precio}</Card.Subtitle>
                </aside>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
