import { CustomersRepository } from "../../repositories/implementations/CustomersRepository";
import { DeleteAllCustomersController } from "./DeleteAllCustomersController";
import { DeleteAllCustomersUseCase } from "./DeleteAllCustomersUseCase";

const customersRepository = CustomersRepository.getInstance()
const deleteAllCustomersUseCase = new DeleteAllCustomersUseCase(customersRepository)
const deleteAllCustomersController = new DeleteAllCustomersController(deleteAllCustomersUseCase)

export { deleteAllCustomersController }