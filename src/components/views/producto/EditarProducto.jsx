import { Container, Form, Button } from "react-bootstrap";

const EditarProducto = () => {
    return (
        <Container className="my-5">
      <h2 className="display-4">Editar producto</h2>
      <hr />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Nombre producto*</Form.Label>
          <Form.Control type="text" placeholder="Ej: Cafe" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control type="text" placeholder="Ej: 50" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="URL"
            placeholder="Ej: https://es.cravingsjournal.com/wp-content/uploads/2022/05/brownies-melcochudos-4.jpg"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select>
            <option>Seleccione el genero</option>
            <option value="Cafe">Cafe</option>
            <option value="Brownie">Brownie</option>
            <option value="Facturas">Facturas</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </Container>
    );
};

export default EditarProducto;