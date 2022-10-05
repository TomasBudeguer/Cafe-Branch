import { Button, Container, Table } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";

const Administrador = () => {
  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center">
        <aside>
          <h2 className="display-4">Prouctos disponibles</h2>
        </aside>
        <aside>
          <Button>Agregar</Button>
        </aside>
      </div>
      <hr />
      <Table striped bordered hover>
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
          <ItemProducto></ItemProducto>
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;
