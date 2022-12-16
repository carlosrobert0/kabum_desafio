import { 
  createContext, 
  ReactNode, 
  useContext,
  useEffect,
  useState} from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

interface AuthProvider {
  children: ReactNode;
}

interface IAuthContextData {
  signIn({ login, password }: SignInCredentials): Promise<void>;
  signOut(): Promise<void>;
}

interface SignInCredentials {
  login: string;
  password: string;
}

const AuthContext = createContext({} as IAuthContextData)

function AuthProvider({ children }: AuthProvider) {
  const navigate = useNavigate()

  async function signOut() {
    localStorage.clear()
  }

  async function signIn({ login, password }: SignInCredentials) {
    try {
      const response = await api.post("/authenticate", {
        login,
        password
      })

      localStorage.setItem('@Auth:token', response.data)
      api.defaults.headers['Authorization'] = `Bearer ${response.data}`

      navigate("/customers")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{ 
      signIn,
      signOut
    }}>
      { children }
    </AuthContext.Provider >
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }