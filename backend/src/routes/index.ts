import { Router } from 'express'
import { addressesRoutes } from './addresses.routes'

import { customersRoutes } from './customers.routes'
import { usersRoutes } from './users.routes'

const routes = Router()

routes.use(usersRoutes)
routes.use(customersRoutes)
routes.use(addressesRoutes)
export { routes }