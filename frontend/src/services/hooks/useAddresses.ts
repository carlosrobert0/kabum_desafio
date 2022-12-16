import { useQuery } from "react-query";
import { api } from "../api";

const token = localStorage.getItem('@Auth:token')

async function getAddresses() {
  const response = await api.get("/addresses", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  console.log(response.data)
  return response.data
}

export function useAddresses() {
  return useQuery('addresses', getAddresses)
}