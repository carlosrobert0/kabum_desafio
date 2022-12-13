import { AddressesRepository } from "../../repositories/implementations/AddressesRepository";

export class DeleteAllAddressesOfCustomerIdUseCase {
  constructor(private addressesRepository: AddressesRepository) {}

  async execute(customer_id: string) {
    await this.addressesRepository.deleteAllAddressesByCustomerId(customer_id)
  }
}