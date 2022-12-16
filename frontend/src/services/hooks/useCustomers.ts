import { useQuery } from "react-query";
import { api } from "../api";

const token = localStorage.getItem('@Auth:token')

export interface Address {
  cep: string
  street: string
  number: number
  neighborhood: string
  city: string
  state: string
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

export async function getCustomers(): Promise<Customer[]> {
  const response = await api.get("/customers", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response.data
}

export function useCustomers() {
  return useQuery('customers', getCustomers)
}