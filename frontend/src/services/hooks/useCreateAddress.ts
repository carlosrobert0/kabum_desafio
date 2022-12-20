import { useMutation } from "react-query"
import { api } from "../api"
import { queryClient } from "../queryClient"
import { Address } from "./useCustomers"

interface CreateAddress extends Omit<Address, 'id'> { }

const token = localStorage.getItem('@Auth:token')
export async function createAddress({
  cep,
  city,
  neighborhood,
  number,
  state,
  street,
}: CreateAddress): Promise<void> {
  await api.post("/addresss", {
    cep,
    city,
    neighborhood,
    number,
    state,
    street,
  })
}

export function useCreateAddress() {
  const address = useMutation(async (address: CreateAddress) => {

    const response = await api.post(`/addresses`, {...address, number: Number(address.number)}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('addresss')
    }
  })

  return address
}