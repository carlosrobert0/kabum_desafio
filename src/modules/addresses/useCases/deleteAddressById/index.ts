import { AddressesRepository } from "../../repositories/implementations/AddressesRepository"
import { DeleteAddressByIdController } from "./DeleteAddressByIdController"
import { DeleteAddressByIdUseCase } from "./DeleteAddressByIdUseCase"

const addressesRepository = AddressesRepository.getInstance()
const deleteAllAddressesUseCase = new DeleteAddressByIdUseCase(addressesRepository)
const deleteAddressByIdController = new DeleteAddressByIdController(deleteAllAddressesUseCase)

export { deleteAddressByIdController }
