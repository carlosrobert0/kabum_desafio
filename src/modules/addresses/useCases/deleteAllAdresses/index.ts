import { AddressesRepository } from "../../repositories/implementations/AddressesRepository"
import { DeleteAllAddressesController } from "./DeleteAllAddressesController"
import { DeleteAllAddressesUseCase } from "./DeleteAllAddressesUseCase"

const addressesRepository = AddressesRepository.getInstance()
const deleteAllAddressesUseCase = new DeleteAllAddressesUseCase(addressesRepository)
const deleteAllAddressesController = new DeleteAllAddressesController(deleteAllAddressesUseCase)

export { deleteAllAddressesController }
