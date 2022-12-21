import { CustomersRepository } from "../../repositories/implementations/CustomersRepository"
import { FindCustomerByIdController } from "./FindCustomerByIdController"
import { FindCustomerByIdUseCase } from "./FindCustomerByIdUseCase"

const customersRepository = CustomersRepository.getInstance()
const findCustomerByIdUseCase = new FindCustomerByIdUseCase(customersRepository)
const findCustomerByIdController = new FindCustomerByIdController(findCustomerByIdUseCase)

export { findCustomerByIdController }