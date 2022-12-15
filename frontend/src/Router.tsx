import { Routes, Route } from 'react-router-dom'
import { AccountLayout } from './layouts/AccountLayout'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Addresses } from './pages/Addresses'
import { Customers } from './pages/Customers'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

export function Router() {
  return (
    <Routes>
      <Route path="" element={<AccountLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="" element={<DefaultLayout />}>
        <Route path="/customers" element={<Customers />} />
        <Route path="/addresses" element={<Addresses />} />
      </Route>
    </Routes>
  )
}