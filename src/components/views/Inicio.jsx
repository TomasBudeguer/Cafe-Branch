import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { useEffect, useState } from "react";
import { consultarAPI } from "../helpers/queries";

const Inicio = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultarAPI().then((respuesta) => {
      console.log(respuesta);
      setProductos(respuesta);
    });
  }, []);

  return (
    <Container className="my-5">
      <h1 className="display-4 text-center">Bienvenidos</h1>
      <hr />
      <Row>
        {
            productos.map((producto)=>(<CardProducto key={producto.id} producto={producto} setProductos={setProductos}></CardProducto>))
        }
      </Row>
    </Container>
  );
};

export default Inicio;