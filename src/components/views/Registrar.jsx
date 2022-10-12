import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Registrar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombre: "",
      apellido: "",
      email: "",
      contrasenia: "",
    },
  });

  const onSubmit = (datos) => {
    console.log(datos);
  };

  return (
    <Container className="my-5">
      <h2 className="display-4">Registro</h2>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Juan Bautista"
            {...register("nombre", {
              required: "Este campo es obligatorio",
              minLength: {
                value: 2,
                message: "Su nombre debe contener como minimo 2 caracteres",
              },
              maxLength: {
                value: 20,
                message: "Su nombre debe contener como maximo 20 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombre?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicApellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Rodriguez"
            {...register("apellido", {
              required: "Este campo es obligatorio",
              minLength: {
                value: 2,
                message: "Su apellido debe contener como minimo 2 caracteres",
              },
              maxLength: {
                value: 20,
                message: "Su apellido debe contener como maximo 20 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.apellido?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="juanbautista@gmail.com"
            {...register("email", {
              required: "Este campo es obligatorio",
              pattern: {
                value:
                  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                message: "Ingrese un email valido",
              },
              minLength: {
                value: 1,
                message: "El email debe contener como minimo 1 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicContrasenia">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Holamundo1"
            {...register("contrasenia", {
              required: "Este campo es obligatorio.",
              pattern: {
                value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                message:
                  "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.",
              },
              minLength: {
                value: 8,
                message: "La contraseña debe contener como minimo 8 caracteres",
              },
              maxLength: {
                value: 16,
                message:
                  "La contraseña debe contener como maximo 16 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.contrasenia?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>
    </Container>
  );
};

export default Registrar;
