import { AddressesRepository } from "../../repositories/implementations/AddressesRepository"
import { FindAllAddressesController } from "./FindAllAddressesController"
import { FindAllAddressesUseCase } from "./FindAllAddressesUseCase"

const addressesRepository = AddressesRepository.getInstance()
const findAllAddressesUseCase = new FindAllAddressesUseCase(addressesRepository)
const findAllAddressesController = new FindAllAddressesController(findAllAddressesUseCase)

export { findAllAddressesController }
