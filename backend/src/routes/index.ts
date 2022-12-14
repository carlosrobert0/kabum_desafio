import { Router } from 'express'
import { addressesRoutes } from './addresses.routes'
import { authenticateRoutes } from './authenticate.routes'

import { customersRoutes } from './customers.routes'
import { usersRoutes } from './users.routes'

const routes = Router()

routes.use("/users", usersRoutes)
routes.use("/customers", customersRoutes)
routes.use("/addresses", addressesRoutes)
routes.use("/authenticate", authenticateRoutes)

export { routes }