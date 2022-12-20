import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { ButtonSubmit, AddressContainer, WrapperInput, SelectInput } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { Address, useCustomers } from "../../../services/hooks/useCustomers";
import { updateAddress } from "../../../services/hooks/useUpdateAddressById";

const schema = yup.object({
  cep: yup.string().required('O cep é obrigatório.'),
  city: yup.string().required('A cidade é obrigatório.'),
  neighborhood: yup.string().required('O bairro é obrigatório.'),
  number: yup.string().required('O numero é obrigatório.'),
  state: yup.string().required('O estado é obrigatório.'),
  street: yup.string().required('A rua é obrigatório.'),
}).required();

interface UpdateAddress extends Omit<Address, 'id'> { }

export function UpdateAddress() {
  const { data, isLoading, error } = useCustomers()

  const { register, handleSubmit, formState: { errors } } = useForm<UpdateAddress>({
    resolver: yupResolver(schema)
  });

  const navigate = useNavigate()
  
  let idParams: any 
  
  const { id } = useParams()

  if (id) {
    idParams = id
  }

  async function handleUpdateCustomer(address: UpdateAddress) {
    try {
      await updateAddress(idParams, address)

      navigate('/addresses')
    } catch (error) {
      
    }
  }

  return (
    <AddressContainer>
      <h1>ATUALIZAR ENDEREÇO</h1>

      <form onSubmit={handleSubmit(handleUpdateCustomer)}>
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