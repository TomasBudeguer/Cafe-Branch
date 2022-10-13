import {Button} from 'react-bootstrap'
import { borrarProductoAPI, consultarAPI } from '../../helpers/queries';
import Swal from 'sweetalert2';

const ItemProducto = ({producto, setProductos}) => {

  const borrarProducto = ()=>{
    Swal.fire({
      title: '¿Esta seguro de eliminar el producto?',
      text: "No se puede revertir este paso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // realizar la consulta a la API
        borrarProductoAPI(producto.id).then((respuesta)=>{
          if(respuesta.status === 200){
            // actualizar el state producto o la tabla
            consultarAPI().then((respuesta)=>{
              setProductos(respuesta)
            })

            Swal.fire(
              'Producto eliminado!',
              'El producto fue correctamnete eliminado.',
              'success'
            )
          }else{
            Swal.fire(
              'Se produjo un error!',
              'Intente realizar esta operacion mas tarde.',
              'error'
            )
          }
        })
      }
    })
  }

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
        <Button variant="danger" className="mb-1" onClick={borrarProducto}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
