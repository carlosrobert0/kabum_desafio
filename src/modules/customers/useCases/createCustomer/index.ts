import { CustomersRepository } from "../../repositories/implementations/CustomersRepository";
import { CreateCustomerController } from "./CreateCustomerController";
import { CreateCustomerUseCase } from "./CreateCustomerUseCase";

const customersRepository = CustomersRepository.getInstance()
const createCustomerUseCase = new CreateCustomerUseCase(customersRepository)
const createCustomerController = new CreateCustomerController(createCustomerUseCase)

export { createCustomerController }