import { CustomersRepository } from "../../repositories/implementations/CustomersRepository";

export class DeleteAllCustomersUseCase {
  constructor(private customersRepository: CustomersRepository) {}

  async execute() {
    await this.customersRepository.deleteAll()
  }
}