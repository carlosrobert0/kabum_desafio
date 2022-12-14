import { AddressesRepository } from "../../repositories/implementations/AddressesRepository";

export class DeleteAllAddressesUseCase {
  constructor(private addressesRepository: AddressesRepository) {}

  async execute() {
    await this.addressesRepository.deleteAll()
  }
}