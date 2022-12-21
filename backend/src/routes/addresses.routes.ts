import { Router } from "express"

import { deleteAllAddressesController } from "../modules/addresses/useCases/deleteAllAdresses"
import { deleteAllAddressesByCustomerIdController } from "../modules/addresses/useCases/deleteAllAdressesByCustomerId"
import { findAllAddressesController } from "../modules/addresses/useCases/findAllAddresses"
import { createAddressController } from "../modules/addresses/useCases/createAddress"
import { deleteAddressByIdController } from "../modules/addresses/useCases/deleteAddressById"
import { updateAddressByIdController } from "../modules/addresses/useCases/updateAddressById"
import { findAddressByIdController } from "../modules/addresses/useCases/findAllAddressById"

import { ensureAuthenticateUser } from "../middlewares/ensureAuthenticateUser"
import { findAllAddressesByCustomerIdController } from "../modules/addresses/useCases/findAllAddressesByCustomerId"

const addressesRoutes = Router()

addressesRoutes.get("/", ensureAuthenticateUser, (request, response) => {
  findAllAddressesController.handle(request, response)
})

addressesRoutes.get("/:id", ensureAuthenticateUser, (request, response) => {
  findAddressByIdController.handle(request, response)
})

addressesRoutes.get("/customerId/:customer_id", ensureAuthenticateUser, (request, response) => {
  findAllAddressesByCustomerIdController.handle(request, response)
})

addressesRoutes.post("/", ensureAuthenticateUser, (request, response) => {
  createAddressController.handle(request, response)
})

addressesRoutes.delete("/", ensureAuthenticateUser, (request, response) => {
  return deleteAllAddressesController.handle(request, response)
})

addressesRoutes.delete("/:id", ensureAuthenticateUser, (request, response) => {
  return deleteAddressByIdController.handle(request, response)
})

addressesRoutes.delete("/:customer_id", ensureAuthenticateUser, (request, response) => {
  return deleteAllAddressesByCustomerIdController.handle(request, response)
})

addressesRoutes.put("/:id", ensureAuthenticateUser, (request, response) => {
  return updateAddressByIdController.handle(request, response)
})

export { addressesRoutes }