import { AddressesRepository } from "../../repositories/implementations/AddressesRepository";

export class FindAllAddressesUseCase {
  constructor(private addressesRepository: AddressesRepository) {}

  async execute() {
    const addresses = this.addressesRepository.findAll()

    return addresses
  }
}