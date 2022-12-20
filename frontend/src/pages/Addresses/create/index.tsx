import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { ButtonSubmit, AddressContainer, WrapperInput, SelectInput } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { queryClient } from "../../../services/queryClient";
import { useCreateAddress } from "../../../services/hooks/useCreateAddress";
import { Address, useCustomers } from "../../../services/hooks/useCustomers";

const schema = yup.object({
  cep: yup.string().required('O cep é obrigatório.'),
  city: yup.string().required('A cidade é obrigatório.'),
  neighborhood: yup.string().required('O bairro é obrigatório.'),
  number: yup.string().required('O numero é obrigatório.'),
  state: yup.string().required('O estado é obrigatório.'),
  street: yup.string().required('A rua é obrigatório.'),
}).required();

interface CreateAddress extends Omit<Address, 'id'> { }

export function CreateAddress() {
  const { data, isLoading, error } = useCustomers()

  const createAddress = useCreateAddress()

  const { register, handleSubmit, formState: { errors } } = useForm<CreateAddress>({
    resolver: yupResolver(schema)
  });

  const navigate = useNavigate()

  async function handleCreateAddress(address: CreateAddress) {
    try {
      await createAddress.mutateAsync(address)
      navigate("/addresses")
    } catch (error) {
      
    }
  }

  return (
    <AddressContainer>
      <h1>CRIAR ENDEREÇO</h1>

      <form onSubmit={handleSubmit(handleCreateAddress)}>
        <div>
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
            >Rua *</label>
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
            >Número *</label>
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
              htmlFor="name"
            >Bairro *</label>
            <p>{errors.neighborhood?.message}</p>
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
            >Cidade *</label>
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
            >Estado *</label>
            <p>{errors.state?.message}</p>
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
            >CEP *</label>
            <p>{errors.cep?.message}</p>
          </WrapperInput>
        </div>

        <hr />

        <div>
          <h3>ASSOCIAR A UM CLIENTE</h3>
          <SelectInput 
            {...register("customer_id")}
            name="customer_id"
            size={6} 
            required
          >
            {
              data?.map((customer) => {
                return (
                  <option key={customer.id} value={customer.id}>
                    <p>Nome: {customer.name}, </p>
                    <p>CPF: {customer.cpf}</p>
                  </option>
                )
              })
            }
          </SelectInput>
          
          <ButtonSubmit type="submit">
            CONTINUAR
          </ButtonSubmit>
        </div>
      </form>
    </AddressContainer>
  )
}