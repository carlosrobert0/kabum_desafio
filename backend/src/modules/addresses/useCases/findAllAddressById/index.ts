import { AddressesRepository } from "../../repositories/implementations/AddressesRepository"
import { FindAddressByIdController } from "./FindAddressByIdController"
import { FindAddressByIdUseCase } from "./FindAddressByIdUseCase"

const addressesRepository = AddressesRepository.getInstance()
const findAddressByIdUseCase = new FindAddressByIdUseCase(addressesRepository)
const findAddressByIdController = new FindAddressByIdController(findAddressByIdUseCase)

export { findAddressByIdController }
