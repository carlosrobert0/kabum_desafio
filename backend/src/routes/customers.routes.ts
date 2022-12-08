import { Router } from 'express'

import { CreateCustomerController } from '../modules/customers/useCases/createCustomer/CreateCustomerController'

const customersRoutes = Router()

const createCustomerController = new CreateCustomerController()

customersRoutes.post("/customer", createCustomerController.handle)

export { customersRoutes }