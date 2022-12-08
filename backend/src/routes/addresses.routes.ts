import { Router } from 'express'

import { CreateAddressController } from '../modules/addresses/useCases/createAddress/CreateAddressController'

const addressesRoutes = Router()

const createAddressController = new CreateAddressController()

addressesRoutes.post("/address", createAddressController.handle)

export { addressesRoutes }