import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../validation/formValidation";
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
import useAuth from "../../hooks/useAuth";


export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  async function handleLogin(body) {
    try {
      const { data } = await api.login(body);

      login(data);
      navigate("/");
    } catch (error) {
      console.log(error);
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

      <Form onSubmit={handleSubmit((body) => handleLogin(body))}>
        <Input
          {...register("email")}
          type="email"
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

        <Button>Log In</Button>
        <StyledLink to="/sign-up">First time? Create an account!</StyledLink>
      </Form>

    </Container>
  );
}
