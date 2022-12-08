import { Router } from 'express'

import { CreateCustomerController } from '../modules/customers/useCases/createCustomer/CreateCustomerController'
import { FindAllCustomersController } from '../modules/customers/useCases/findAllCustomers/FindAllCustomersController'

const customersRoutes = Router()

const findAllCustomerController = new FindAllCustomersController()
const createCustomerController = new CreateCustomerController()

customersRoutes.get("/customers", findAllCustomerController.handle)
customersRoutes.post("/customer", createCustomerController.handle)

export { customersRoutes }