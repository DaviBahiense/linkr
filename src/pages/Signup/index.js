import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
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
import { Bars } from 'react-loader-spinner';

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const navigate = useNavigate();

  async function handleRegister(body) {
    
    setIsLoading(true);
    try {
      await api.signup(body);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      if (error.response.status === 409) {
        alert("Usuário já cadastrado")
        setIsLoading(false);
      }
      console.log(error)
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
        <Button disabled={isLoading}>
          {
            isLoading
              ? <Bars color="#FFFFFF" height={60} width={60} />
              : "Sign Up"
          }
        </Button>
        <StyledLink to="/">Switch back to log in</StyledLink>
      </Form>
    </Container>
  );
}
