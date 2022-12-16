import { useQuery } from "react-query";
import { api } from "../api";

const token = localStorage.getItem('@Auth:token')

async function getAddressesByCustomerId(customer_id: string) {
  const response = await api.get(`/addresses/${customer_id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  console.log(response.data)
  return response.data
}

export function useAddressesByCustomerId(customer_id: string) {
  return useQuery('addresses', () => getAddressesByCustomerId(customer_id))
}