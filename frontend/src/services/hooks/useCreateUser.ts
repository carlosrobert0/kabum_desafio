import { useMutation } from "react-query"
import { api } from "../api"
import { queryClient } from "../queryClient"
import { Address } from "./useCustomers"

export interface CreateUser {
  name: string;
  login: string;
  password: string;
  confirmPassword?: string;
}
export async function createAddress({
  name,
  login,
  password
}: CreateUser): Promise<void> {
  await api.post("/users", {
    name,
    login,
    password
  })
}

export function useCreateUser() {
  const user = useMutation(async (user: CreateUser) => {
    await api.post(`/users`, user)
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    }
  })

  return user
}