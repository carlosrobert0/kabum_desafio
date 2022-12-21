import { AddressesRepository } from "../../repositories/implementations/AddressesRepository"
import { FindAllAddressesByCustomerIdController } from "./FindAllAddressesByCustomerIdController"
import { FindAllAddressesByCustomerIdUseCase } from "./FindAllAddressesByCustomerIdUseCase"

const addressesRepository = AddressesRepository.getInstance()
const findAllAddressesByCustomerIdUseCase = new FindAllAddressesByCustomerIdUseCase(addressesRepository)
const findAllAddressesByCustomerIdController = new FindAllAddressesByCustomerIdController(findAllAddressesByCustomerIdUseCase)

export { findAllAddressesByCustomerIdController }
