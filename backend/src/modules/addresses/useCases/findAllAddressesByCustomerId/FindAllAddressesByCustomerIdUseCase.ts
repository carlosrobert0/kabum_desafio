import { AddressesRepository } from "../../repositories/implementations/AddressesRepository";

export class FindAllAddressesByCustomerIdUseCase {
  constructor(private addressesRepository: AddressesRepository) {}

  async execute(customer_id: string) {
    const addresses = this.addressesRepository.findAllByCustomerId(customer_id)

    return addresses
  }
}