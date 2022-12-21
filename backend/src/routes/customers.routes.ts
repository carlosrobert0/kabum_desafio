import { Router } from 'express'

import { createCustomerController } from '../modules/customers/useCases/createCustomer'
import { findAllCustomersController } from '../modules/customers/useCases/findAllCustomers'
import { deleteAllCustomersController } from '../modules/customers/useCases/deleteAllCustomers'
import { deleteCustomerByIdController } from '../modules/customers/useCases/deleteCustomerById'
import { updateCustomerByIdController } from '../modules/customers/useCases/updateCustomerById'
import { findCustomerByCpfController } from '../modules/customers/useCases/findCustomerByCpf'

import { ensureAuthenticateUser } from '../middlewares/ensureAuthenticateUser'
import { findCustomerByIdController } from '../modules/customers/useCases/findCustomerById'

const customersRoutes = Router()

customersRoutes.get("/", ensureAuthenticateUser, (request, response) => {
  return findAllCustomersController.handle(request, response)
})

customersRoutes.get("/:id", ensureAuthenticateUser, (request, response) => {
  return findCustomerByIdController.handle(request, response)
})

customersRoutes.get("/:cpf", ensureAuthenticateUser, (request, response) => {
  return findCustomerByCpfController.handle(request, response)
})

customersRoutes.post("/", ensureAuthenticateUser, (request, response) => {
  return createCustomerController.handle(request, response)
})

customersRoutes.delete("/", ensureAuthenticateUser, (request, response) => {
  return deleteAllCustomersController.handle(request, response)
})

customersRoutes.delete("/:id", ensureAuthenticateUser, (request, response) => {
  return deleteCustomerByIdController.handle(request, response)
})

customersRoutes.put("/:id", ensureAuthenticateUser, (request, response) => {
  return updateCustomerByIdController.handle(request, response)
})

export { customersRoutes }