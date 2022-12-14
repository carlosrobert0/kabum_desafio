import { AddressesRepository } from "../../repositories/implementations/AddressesRepository"
import { UpdateAddressByIdController } from "./UpdateAddressByIdController"
import { UpdateAddressByIdUseCase } from "./UpdateAddressByIdUseCase"

const addressesRepository = AddressesRepository.getInstance()
const updateAddressByIdUseCase = new UpdateAddressByIdUseCase(addressesRepository)
const updateAddressByIdController = new UpdateAddressByIdController(updateAddressByIdUseCase)

export { updateAddressByIdController }
