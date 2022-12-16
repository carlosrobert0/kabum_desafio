import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { ButtonSubmit, LoginContainer, WrapperInput } from "./styles";
import { api } from "../../../services/api";
import { useMutation } from "react-query";
import { Customer } from "../../../services/hooks/useCustomers";

const schema = yup.object({
  name: yup.string().required('O nome é obrigatório.'),
  birthDate: yup.string().required('A data de nascimento é obrigatória.'),
  cpf: yup.string().required('O CPF é obrigatório.'),
  phone: yup.string().required('O telefone é obrigatório.'),
  rg: yup.string().required('O RG é obrigatório.'),
}).required();

const token = localStorage.getItem('@Auth:token')

export function CreateCustomer() {
  const createUser = useMutation(async ({
    name,
    birthDate,
    cpf,
    phone,
    rg,
    address
  }: Omit<Customer, 'id'>) => {
    await api.post('customers', {
      name,
      birthDate,
      cpf,
      phone,
      rg,
      address
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  })

  const { register, handleSubmit, formState: { errors } } = useForm<Customer>({
    resolver: yupResolver(schema)
  });

  async function handleCreateUser({
    name,
    birthDate,
    cpf,
    phone,
    rg,
    address
  }: Omit<Customer, 'id'>) {
    try {
      await createUser.mutateAsync({
        name, birthDate, cpf, phone, rg, address
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <LoginContainer>
      <h1>CRIAR CLIENTE</h1>

      <form onSubmit={handleSubmit(handleCreateUser)}>
        <div>
          <WrapperInput>
            <input
              {...register("name")}
              id="name"
              name="name"
              type="text"
              placeholder="Nome"
            />
            <label
              htmlFor="name"
            >Nome *</label>
            <p>{errors.name?.message}</p>
          </WrapperInput>

          <WrapperInput>
            <input
              {...register("birthDate")}
              id="birthDate"
              name="birthDate"
              type="date"
              placeholder="Data de nascimento"
            />
            <label
              htmlFor="birthDate"
            >Data de nascimento *</label>
            <p>{errors.birthDate?.message}</p>
          </WrapperInput>

          <WrapperInput>
            <input
              {...register("cpf")}
              id="cpf"
              name="cpf"
              type="text"
              placeholder="CPF"
            />
            <label
              htmlFor="name"
            >CPF *</label>
            <p>{errors.cpf?.message}</p>
          </WrapperInput>

          <WrapperInput>
            <input
              {...register("rg")}
              id="rg"
              name="rg"
              type="text"
              placeholder="RG"
            />
            <label
              htmlFor="rg"
            >RG *</label>
            <p>{errors.rg?.message}</p>
          </WrapperInput>

          <WrapperInput>
            <input
              {...register("phone")}
              id="phone"
              name="phone"
              type="text"
              placeholder="Telefone"
            />
            <label
              htmlFor="phone"
            >Telefone *</label>
            <p>{errors.phone?.message}</p>
          </WrapperInput>

          <ButtonSubmit type="submit">
            CONTINUAR
          </ButtonSubmit>
        </div>

        <hr />

        {/* <div>
          <WrapperInput>
            <input
              {...register("street")}
              id="street"
              name="street"
              type="text"
              placeholder="Rua"
            />
            <label
              htmlFor="street"
            >Rua</label>
            <p>{errors.street?.message}</p>
          </WrapperInput>

          <WrapperInput>
            <input
              {...register("number")}
              id="number"
              name="number"
              type="number"
              placeholder="Número"
            />
            <label
              htmlFor="number"
            >Número</label>
            <p>{errors.number?.message}</p>
          </WrapperInput>

          <WrapperInput>
            <input
              {...register("neighborhood")}
              id="neighborhood"
              name="neighborhood"
              type="text"
              placeholder="Bairro"
            />
            <label
              htmlFor="neighborhood"
            >Bairro</label>
            <p>{errors.neighborhood?.message}</p>
          </WrapperInput>

          <WrapperInput>
            <input
              {...register("cep")}
              id="cep"
              name="cep"
              type="text"
              placeholder="CEP"
            />
            <label
              htmlFor="cep"
            >CEP</label>
            <p>{errors.cep?.message}</p>
          </WrapperInput>

          <WrapperInput>
            <input
              {...register("city")}
              id="city"
              name="city"
              type="text"
              placeholder="Cidade"
            />
            <label
              htmlFor="city"
            >Cidade</label>
            <p>{errors.city?.message}</p>
          </WrapperInput>

          <WrapperInput>
            <input
              {...register("state")}
              id="state"
              name="state"
              type="text"
              placeholder="Estado"
            />
            <label
              htmlFor="state"
            >Estado</label>
            <p>{errors.state?.message}</p>
          </WrapperInput>
        </div> */}
      </form>
    </LoginContainer>
  )
}