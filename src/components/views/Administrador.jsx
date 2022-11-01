import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { consultarAPI } from "../helpers/queries";
import ItemProducto from "./producto/ItemProducto";
import { Link } from "react-router-dom";

const Administrador = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // opcion 1
    consultarAPI().then((respuesta) => {
      console.log(respuesta);
      setProductos(respuesta);
    });

    // opcion 2
    // const consultaPrueba = async()=>{
    //   const prueba = await consultarAPI()
    //   console.log(prueba)
    // }
    // consultaPrueba()
  }, []);

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center">
        <aside>
          <h2 className="display-4">Prouctos disponibles</h2>
        </aside>
        <aside>
          <Link className="btn btn-primary" to="/administrar/crear">
            Agregar
          </Link>
        </aside>
      </div>
      <hr />
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <ItemProducto key={producto._id} producto={producto} setProductos={setProductos}></ItemProducto>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;
