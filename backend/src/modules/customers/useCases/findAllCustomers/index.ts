import { CustomersRepository } from "../../repositories/implementations/CustomersRepository";
import { FindAllCustomersController } from "./FindAllCustomersController";
import { FindAllCustomersUseCase } from "./FindAllCustomersUseCase";

const customersRepository = CustomersRepository.getInstance()
const findAllCustomersUseCase = new FindAllCustomersUseCase(customersRepository)
const findAllCustomersController = new FindAllCustomersController(findAllCustomersUseCase)

export { findAllCustomersController }