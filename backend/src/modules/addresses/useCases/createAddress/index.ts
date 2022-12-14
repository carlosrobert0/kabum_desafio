import { AddressesRepository } from "../../repositories/implementations/AddressesRepository"
import { CreateAddressController } from "./CreateAddressController"
import { CreateAddressUseCase } from "./CreateAddressUseCase"

const addressesRepository = AddressesRepository.getInstance()
const createAddressUseCase = new CreateAddressUseCase(addressesRepository)
const createAddressController = new CreateAddressController(createAddressUseCase)

export { createAddressController }
