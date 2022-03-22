import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../validation/formValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Container,
  Welcome,
  Form,
  Input,
  Button,
  StyledLink,
} from "../../components/AuthComponents";
import api from "../../services/api";


export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const navigate = useNavigate();

  async function handleRegister(body) {
    

    try {
      await api.signup(body);
      navigate("/");
    } catch (error) {
      console.log(error)
      alert("Erro, tente novamente");
    }
  }

  return (
    <Container>
      <Welcome>
        <div>
          <h1>linkr</h1>
          <h2>save, share and discover <br/>the best links on the web</h2>
        </div>
      </Welcome>

      <Form onSubmit={handleSubmit((body) => handleRegister(body))}>
        <Input
          {...register("email")}
          type="text"
          placeholder="e-mail"
          name="email"
        />
        <p>{errors.email?.message}</p>
        <Input
          {...register("password")}
          type="password"
          placeholder="password"
          name="password"
        />
        <p>{errors.password?.message}</p>
        <Input
          {...register("name")}
          type="text"
          placeholder="username"
          name="name"
        />
        <p>{errors.name?.message}</p>
        <Input
          {...register("img")}
          type="text"
          placeholder="picture url"
          name="img"
        />
        <p>{errors.img?.message}</p>
        <Button>Sign Up</Button>
        <StyledLink to="/">Switch back to log in</StyledLink>
      </Form>
    </Container>
  );
}
