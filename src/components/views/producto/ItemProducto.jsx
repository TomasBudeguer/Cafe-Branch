import {Button} from 'react-bootstrap'

const ItemProducto = ({producto}) => {
  return (
    <tr>
      <td>{producto.id}</td>
      <td>{producto.nombreProducto}</td>
      <td>${producto.precio}</td>
      <td>
        {producto.imagen}
      </td>
      <td>{producto.categoria}</td>
      <td>
        <Button variant="warning" className="me-2 mb-1">
          Editar
        </Button>
        <Button variant="danger" className="mb-1">
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
