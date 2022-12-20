import { useMutation } from "react-query"
import { api } from "../api"
import { queryClient } from "../queryClient"
import { Customer } from "./useCustomers"

interface CreateCustomer extends Omit<Customer, 'id'> {}

const token = localStorage.getItem('@Auth:token')

export async function createCustomer({
  name,
  birthDate,
  cpf,
  phone,
  rg,
  address
}: CreateCustomer): Promise<void> {
  await api.post("/customers", {
    name,
    birthDate,
    cpf,
    phone,
    rg,
    address
  })
}

export function useCreateCustomer() {
  const customer = useMutation(async (customer: CreateCustomer) => {
    const response = await api.post('/customers', 
      {...customer, birthDate : `${customer.birthDate}T00:00:00.000Z`}, {
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