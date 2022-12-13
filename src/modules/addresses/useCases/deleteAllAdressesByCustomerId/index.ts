import { AddressesRepository } from "../../repositories/implementations/AddressesRepository"
import { DeleteAllAddressesByCustomerIdController } from "./DeleteAllAddressesByCustomerIdController"
import { DeleteAllAddressesOfCustomerIdUseCase } from "./DeleteAllAddressesByCustomerIdUseCase"

const addressesRepository = AddressesRepository.getInstance()
const deleteAllAddressesOfCustomerIdUseCase = new DeleteAllAddressesOfCustomerIdUseCase(addressesRepository)
const deleteAllAddressesByCustomerIdController = new DeleteAllAddressesByCustomerIdController(deleteAllAddressesOfCustomerIdUseCase)

export { deleteAllAddressesByCustomerIdController }
