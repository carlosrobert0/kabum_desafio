import { ICustomersRepository } from "../../repositories/ICustomersRepository";

export class FindCustomerByCpfUseCase {
  constructor(private customersRepository: ICustomersRepository) {}

  async execute(cpf: string) {
    const customers = await this.customersRepository.findByCpf(cpf)

    return customers
  }
}