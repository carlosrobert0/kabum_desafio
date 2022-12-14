import { AddressesRepository } from "../../repositories/implementations/AddressesRepository"
import { DeleteAddressByIdController } from "./DeleteAddressByIdController"
import { DeleteAddressByIdUseCase } from "./DeleteAddressByIdUseCase"

const addressesRepository = AddressesRepository.getInstance()
const deleteAddressByIdUseCase = new DeleteAddressByIdUseCase(addressesRepository)
const deleteAddressByIdController = new DeleteAddressByIdController(deleteAddressByIdUseCase)

export { deleteAddressByIdController }
