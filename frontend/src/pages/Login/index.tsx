import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { ButtonSubmit, LoginContainer } from "./styles";
import { SignIn } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { WrapperInput } from "../Register/styles";

interface FormData {
  login: string;
  password: string;
}

const schema = yup.object({
  login: yup.string().required('O login é obrigatório.'),
  password: yup.string().required('A senha é obrigatória.'),
}).required();

export function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });


  
  async function handleSign({ login, password }: FormData) {
    event?.preventDefault()

    try {
      
    } catch (error) {
      
    }
  }

  return (
    <LoginContainer>
      <h1>FAZER LOGIN</h1>

      <form onSubmit={handleSubmit(handleSign)}>
        <WrapperInput>
          <input
            {...register("login")}
            id="login"
            name="login"
            type="text"
            placeholder="Digite seu login"
          />
          <label
            htmlFor="login"
          >Login</label>
          <p>{errors.login?.message}</p>
        </WrapperInput>

        <WrapperInput>
          <input
            {...register("password")}
            id="password"
            name="password"
            type="password"
            placeholder="Digite sua senha"
          />
          <label
            htmlFor="password"
          >Senha</label>
          <p>{errors.password?.message}</p>
        </WrapperInput>

        <ButtonSubmit type="submit">
          <SignIn size={24} />
          ENTRAR
        </ButtonSubmit>
      </form>

      <span>
        Não tem uma conta ainda?
        <NavLink to="/register" title="Registrar agora" end>
          <a>Registrar agora</a>
        </NavLink>
      </span>
    </LoginContainer>
  )
}