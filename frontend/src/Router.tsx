import { Routes, Route } from 'react-router-dom'
import { Protected } from './components/Protected'
import { AccountLayout } from './layouts/AccountLayout'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Addresses } from './pages/Addresses'
import { CreateAddress } from './pages/Addresses/create'
import { UpdateAddress } from './pages/Addresses/update'
import { Customers } from './pages/Customers'
import { CreateCustomer } from './pages/Customers/create'
import { UpdateCustomer } from './pages/Customers/update'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<AccountLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/customers" element={<Protected><Customers /></Protected>} />
        <Route path="/customer/create" element={<Protected><CreateCustomer /></Protected>} />
        <Route path="/customer/update/:id" element={<Protected><UpdateCustomer /></Protected>} />
        <Route path="/address/create/:id" element={<Protected><CreateAddress /></Protected>} />
        <Route path="/addresses" element={<Protected><Addresses /></Protected>} />
        <Route path="/addresses/update/:id" element={<Protected><UpdateAddress /></Protected>} />
        <Route path="/addresses/customerId/:id" element={<Protected><Addresses /></Protected>} />
      </Route>
    </Routes>
  )
}