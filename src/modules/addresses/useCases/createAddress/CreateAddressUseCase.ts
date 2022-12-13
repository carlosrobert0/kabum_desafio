import { AddressesRepository } from "../../repositories/implementations/AddressesRepository";

interface CreateAddress {
  cep: string
  street: string
  number: number
  neighborhood: string
  city: string
  state: string
  customer_id: string
}

export class CreateAddressUseCase {
  constructor(private addressesRepository: AddressesRepository) { }

  async execute({
    cep,
    street,
    number,
    neighborhood,
    city,
    state,
    customer_id
  }: CreateAddress) {
    const addressExists = await this.addressesRepository.findByConditionalANDCepStreetNumber(cep, street, number)

    if (addressExists) {
      throw new Error("Address already exists")
    }

    await this.addressesRepository.create({
      cep,
      street,
      number,
      neighborhood,
      city,
      state,
      customer_id
    })
  }
}