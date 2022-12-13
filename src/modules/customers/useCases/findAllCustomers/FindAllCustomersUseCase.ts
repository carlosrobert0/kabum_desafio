import { ICustomersRepository } from "../../repositories/ICustomersRepository";

export class FindAllCustomersUseCase {
  constructor(private customersRepository: ICustomersRepository) {}

  async execute() {
    const customers = await this.customersRepository.findAll()

    return customers
  }
}