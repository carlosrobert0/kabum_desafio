import { Router } from 'express'

import { createCustomerController } from '../modules/customers/useCases/createCustomer'
import { findAllCustomersController } from '../modules/customers/useCases/findAllCustomers'
import { deleteAllCustomersController } from '../modules/customers/useCases/deleteAllCustomers'
import { deleteCustomerByIdController } from '../modules/customers/useCases/deleteCustomerById'

const customersRoutes = Router()

customersRoutes.get("/", (request, response) => {
  return findAllCustomersController.handle(request, response)
})

customersRoutes.post("/", (request, response) => {
  return createCustomerController.handle(request, response)
})

customersRoutes.delete("/", (request, response) => {
  return deleteAllCustomersController.handle(request, response)
})

customersRoutes.delete("/:id", (request, response) => {
  return deleteCustomerByIdController.handle(request, response)
})

export { customersRoutes }