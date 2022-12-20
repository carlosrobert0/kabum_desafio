import { useMutation } from "react-query"
import { api } from "../api"
import { queryClient } from "../queryClient"
import { Customer } from "./useCustomers"

interface UpdateCustomer extends Omit<Customer, 'id'> { }

const token = localStorage.getItem('@Auth:token')

export async function updateCustomer(id: string, data: UpdateCustomer): Promise<void> {
  await api.put(`/customers/${id}`, {...data, birthDate: `${data.birthDate}T00:00:00.000Z`}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export function useUpdateCustomerById(id: string, data: UpdateCustomer) {
  const customer = useMutation(async (customer: UpdateCustomer) => {
    const response = await api.put(`/customers/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

    return response.data
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('customers')
    }
  })
  
  return customer
}
