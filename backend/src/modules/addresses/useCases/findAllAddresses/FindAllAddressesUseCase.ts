import { AddressesRepository } from "../../repositories/implementations/AddressesRepository";

export class FindAllAddressesUseCase {
  constructor(private addressesRepository: AddressesRepository) {}

  async execute(id_user: string) {
    const addresses = this.addressesRepository.findAll(id_user)

    return addresses
  }
}