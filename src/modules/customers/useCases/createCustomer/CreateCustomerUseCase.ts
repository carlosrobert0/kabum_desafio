import { ICustomersRepository } from "../../repositories/ICustomersRepository";

interface Address {
  cep?: string
  street?: string
  number?: number
  neighborhood?: string
  city?: string
  state?: string
}

export interface CreateCustomer {
  name: string
  birthDate: Date
  cpf: string
  rg: string
  phone: string
  address?: Address
}

export class CreateCustomerUseCase {
  constructor(private customersRepository: ICustomersRepository) {}

  async execute({
    name, birthDate, cpf, rg, phone, address }: CreateCustomer) {
    const customer = this.customersRepository.create({
      address,
      birthDate,
      cpf,
      name,
      phone,
      rg
    })

    return customer
  }
}