import { useNavigate } from "react-router-dom";
import { api } from "../api";

const token = localStorage.getItem('@Auth:token')

export async function deleteAddressById(id: string): Promise<void> {
  await api.delete(`/addresses/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export function useDeleteAddressById(id: string) {
  return deleteAddressById(id)
}