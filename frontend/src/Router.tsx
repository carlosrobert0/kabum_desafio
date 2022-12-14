import { Routes, Route } from 'react-router-dom'
import { Addresses } from './pages/Addresses'
import { Customers } from './pages/Customers'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/addresses" element={<Addresses />} />
    </Routes>
  )
}