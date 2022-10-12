import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      usuario: "",
      contrasenia: "",
    },
  });

  const onSubmit = (datos) => {
    console.log(datos);
  };

  return (
    <Container className="my-5">
      <h2 className="display-4">Login</h2>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            {...register("usuario", {
              required: "Este campo es obligatorio",
              pattern: {
                value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                message:
                  "Ingrese un email valido",
              },
              minLength: {
                value: 1,
                message:
                  "El nombre de usuario debe contener como minimo 1 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.usuario?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrecio">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
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

export default Login;
