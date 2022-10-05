import {Button} from 'react-bootstrap'

const ItemProducto = () => {
  return (
    <tr>
      <td>1</td>
      <td>Brownie</td>
      <td>$450</td>
      <td>
        https://es.cravingsjournal.com/wp-content/uploads/2022/05/brownies-melcochudos-4.jpg
      </td>
      <td>Dulce</td>
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
