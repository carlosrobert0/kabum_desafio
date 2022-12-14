import { CustomersRepository } from "../../repositories/implementations/CustomersRepository"
import { FindCustomerByCpfController } from "./FindCustomerByCpfController"
import { FindCustomerByCpfUseCase } from "./FindCustomerByCpfUseCase"

const customersRepository = CustomersRepository.getInstance()
const findCustomerByCpfUseCase = new FindCustomerByCpfUseCase(customersRepository)
const findCustomerByCpfController = new FindCustomerByCpfController(findCustomerByCpfUseCase)

export { findCustomerByCpfController }