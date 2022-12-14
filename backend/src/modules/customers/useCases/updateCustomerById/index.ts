import { AddressesRepository } from "../../../addresses/repositories/implementations/AddressesRepository"
import { CustomersRepository } from "../../repositories/implementations/CustomersRepository"
import { UpdateCustomerByIdController } from "./UpdateCustomerByIdController"
import { UpdateCustomerByIdUseCase } from "./UpdateCustomersByIdUseCase"

const customersRepository = CustomersRepository.getInstance()
const updateCustomerByIdUseCase = new UpdateCustomerByIdUseCase(customersRepository)
const updateCustomerByIdController = new UpdateCustomerByIdController(updateCustomerByIdUseCase)

export { updateCustomerByIdController }
