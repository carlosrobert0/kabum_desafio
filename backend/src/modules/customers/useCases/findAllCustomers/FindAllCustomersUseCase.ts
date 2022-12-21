import { ICustomersRepository } from "../../repositories/ICustomersRepository";

export class FindAllCustomersUseCase {
  constructor(private customersRepository: ICustomersRepository) {}

  async execute(id_user: string) {
    const customers = await this.customersRepository.findAll(id_user)
    
    return customers
  }
}