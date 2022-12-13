import { CustomersRepository } from "../../repositories/implementations/CustomersRepository";

export class DeleteCustomerByIdUseCase {
  constructor(private customersRepository: CustomersRepository) {}

  async execute(id: string) {
    await this.customersRepository.deleteById(id)
  }
}