import { useMutation } from "react-query"
import { api } from "../api"
import { queryClient } from "../queryClient"
import { Address } from "./useCustomers"

export interface UpdateAddress extends Omit<Address, 'id'> { }

const token = localStorage.getItem('@Auth:token')

export async function updateAddress(id: string, data: UpdateAddress): Promise<void> {
  await api.put(`/addresses/${id}`, {...data, number: Number(data.number)}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export function useUpdateAddressById(id: string, data: UpdateAddress) {
  const address = useMutation(async (address: UpdateAddress) => {
    const response = await api.put(`/addresss/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

    return response.data
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('Addresss')
    }
  })
  
  return address
}
