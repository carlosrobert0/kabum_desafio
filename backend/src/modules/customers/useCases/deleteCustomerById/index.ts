import { CustomersRepository } from "../../repositories/implementations/CustomersRepository";
import { DeleteCustomerByIdController } from "./DeleteCustomerByIdController";
import { DeleteCustomerByIdUseCase } from "./DeleteCustomerByIdUseCase";

const customersRepository = CustomersRepository.getInstance()
const deleteCustomerByIdUseCase = new DeleteCustomerByIdUseCase(customersRepository)
const deleteCustomerByIdController = new DeleteCustomerByIdController(deleteCustomerByIdUseCase)

export { deleteCustomerByIdController }