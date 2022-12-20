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
  signOut(): void;
}

interface SignInCredentials {
  login: string;
  password: string;
}

const AuthContext = createContext({} as IAuthContextData)

function AuthProvider({ children }: AuthProvider) {
  const navigate = useNavigate()

  function signOut() {
    localStorage.removeItem('@Auth:token')
    navigate('/')
  }

  async function signIn({ login, password }: SignInCredentials) {
    try {
      const response = await api.post("/authenticate", {
        login,
        password
      })

      localStorage.setItem('@Auth:token', response.data)
      
      const token = localStorage.getItem('@Auth:token')
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      navigate("/customers")
    } catch (error) {
      
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