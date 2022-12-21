import { ICustomersRepository } from "../../repositories/ICustomersRepository";

export class FindCustomerByIdUseCase {
  constructor(private customersRepository: ICustomersRepository) {}

  async execute(id: string) {
    const customer = await this.customersRepository.findById(id)

    return customer
  }
}