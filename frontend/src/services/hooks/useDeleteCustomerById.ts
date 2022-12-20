import { useMutation } from "react-query";
import { api } from "../api";

const token = localStorage.getItem('@Auth:token')

export async function deleteCustomerById(id: any): Promise<void> {
  await api.delete(`/customers/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export function useDeleteCustomerById(id: any) {
  const deleteMutation = useMutation(() => deleteCustomerById(id))
  return deleteMutation.mutate(id)
}