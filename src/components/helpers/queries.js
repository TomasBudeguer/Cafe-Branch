// archivo que nos sirve para hacer las consultas a la api (json-server)

const URL = "http://localhost:3004/productos";
const URLusuarios = "http://localhost:3004/usuarios";

// tipos de peticiones
// peticion GET, que trae todos los productos o un producto
// peticion POST, para crear un producto, login
// peticion DELETE, para borrar un porducto
// peticion PUT, para modificar un producto

export const consultarAPI = async () => {
  try {
    const respuesta = await fetch(URL);
    const listaProductos = await respuesta.json();
    // console.log(listaProductos)
    return listaProductos;
  } catch (error) {
    console.log(error);
  }
};

export const crearProductoAPI = async (producto) => {
  try {
    const respuesta = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URL}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(URL+'/'+id);
    const productoBuscado = {
      dato: await respuesta.json(),
      status: respuesta.status
    }
    return productoBuscado;
  } catch (error) {
    console.log(error);
  }
};

export const crearUsuarioAPI = async (usuario) => {
  try {
    const respuesta = await fetch(URLusuarios, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
