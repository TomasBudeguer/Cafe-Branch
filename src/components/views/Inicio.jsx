import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/adminProductos/CardProducto";

const Inicio = () => {
    return (
        <Container className="my-5">
            <h1 className="display-4 text-center">Bienvenidos</h1>
            <hr />
            <Row>
                <CardProducto></CardProducto>
            </Row>
        </Container>
    );
};

export default Inicio;