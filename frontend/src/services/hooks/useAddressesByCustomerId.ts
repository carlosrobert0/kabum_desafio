import { useQuery } from "react-query";
import { api } from "../api";

const token = localStorage.getItem('@Auth:token')

export async function getAddressesByCustomerId(customer_id: string) {
  const response = await api.get(`/addresses/customerId/${customer_id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response.data
}

export function useAddressesByCustomerId(customer_id: string) {
  return useQuery('addressesByCustomerId', () => getAddressesByCustomerId(customer_id))
}