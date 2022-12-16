import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { ButtonSubmit, LoginContainer, WrapperInput } from "./styles";

interface FormData {
  name: string;
  login: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object({
  name: yup.string().required('O nome é obrigatório.'),
  login: yup.string().required('O login é obrigatório.'),
  password: yup.string().required('A senha é obrigatória.'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas não conferem.')
}).required();

export function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  async function handleCreateUser({ name, login, password, confirmPassword }: FormData) {
    event?.preventDefault()
    try {
      
    } catch (error) {
      
    }
  }

  return (
    <LoginContainer>
      <h1>CRIAR CONTA</h1>

      <form onSubmit={handleSubmit(handleCreateUser)}>
        <WrapperInput>
          <input
            {...register("name")}
            id="name"
            name="name"
            type="text"
            placeholder="Nome"
            autoFocus
          />
          <label
            htmlFor="name"
          >Nome</label>
          <p>{errors.name?.message}</p>
        </WrapperInput>

        <WrapperInput>
          <input
            {...register("login")}
            id="login"
            name="login"
            type="text"
            placeholder="Login"
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
            placeholder="Senha"
          />
          <label
            htmlFor="password"
          >Senha</label>
          <p>{errors.password?.message}</p>
        </WrapperInput>

        <WrapperInput>
          <input
            {...register("confirmPassword")}
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Senha"
          />
          <label
            htmlFor="confirmPassword"
          >Confirmar senha</label>
          <p>{errors.confirmPassword?.message}</p>
        </WrapperInput>

        <ButtonSubmit disabled type="submit">
          CONTINUAR
        </ButtonSubmit>
      </form>
    </LoginContainer>
  )
}