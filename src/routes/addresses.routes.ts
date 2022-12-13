import { Router } from "express"

import { deleteAllAddressesController } from "../modules/addresses/useCases/deleteAllAdresses"
import { deleteAllAddressesByCustomerIdController } from "../modules/addresses/useCases/deleteAllAdressesByCustomerId"
import { findAllAddressesController } from "../modules/addresses/useCases/findAllAddresses"
import { createAddressController } from "../modules/addresses/useCases/createAddress"
import { deleteAddressByIdController } from "../modules/addresses/useCases/deleteAddressById"

const addressesRoutes = Router()

addressesRoutes.get("/", (request, response) => {
  findAllAddressesController.handle(request, response)
})

addressesRoutes.post("/", (request, response) => {
  createAddressController.handle(request, response)
})

addressesRoutes.delete("/", (request, response) => {
  return deleteAllAddressesController.handle(request, response)
})

addressesRoutes.delete("/:id", (request, response) => {
  return deleteAddressByIdController.handle(request, response)
})

addressesRoutes.delete("/:customer_id", (request, response) => {
  return deleteAllAddressesByCustomerIdController.handle(request, response)
})

export { addressesRoutes }