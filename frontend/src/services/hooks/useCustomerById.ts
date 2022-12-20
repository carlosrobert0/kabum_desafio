import { useQuery } from "react-query";
import { api } from "../api";
export interface Address {
  id?: string;
  cep: string
  street: string
  number: number
  neighborhood: string
  city: string
  state: string
  customer_id: string
}

export interface Customer {
  id: string
  name: string
  birthDate: Date
  cpf: string
  rg: string
  phone: string
  address?: Address[] | any
}

const token = localStorage.getItem('@Auth:token')


export async function getCustomers(id: string): Promise<Customer[]> {
  const response = await api.get(`/customers/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  
  return response.data
}

export function useCustomerById(id: string) {
  return useQuery('customerById', () => getCustomers(id))
}