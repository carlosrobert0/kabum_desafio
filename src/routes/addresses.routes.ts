import { Router } from 'express'

import { CreateAddressController } from '../modules/addresses/useCases/createAddress/CreateAddressController'
import { FindAllAddressesController } from '../modules/addresses/useCases/findAllAddresses/FindAllAddressesController'

const addressesRoutes = Router()

const createAddressController = new CreateAddressController()
const findAllAddressesController = new FindAllAddressesController()

addressesRoutes.get("/addresses", findAllAddressesController.handle)
addressesRoutes.post("/address", createAddressController.handle)

export { addressesRoutes }