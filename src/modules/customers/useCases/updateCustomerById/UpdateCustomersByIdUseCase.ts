import { CustomerDTO } from "../../repositories/ICustomersRepository";
import { CustomersRepository } from "../../repositories/implementations/CustomersRepository";

export class UpdateCustomerByIdUseCase {
  constructor(private customeresRepository: CustomersRepository) {}

  async execute(id: string, data: CustomerDTO) {
    await this.customeresRepository.updateById(id, data)
  }
}