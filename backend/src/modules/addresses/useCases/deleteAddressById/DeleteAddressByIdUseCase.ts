import { AddressesRepository } from "../../repositories/implementations/AddressesRepository";

export class DeleteAddressByIdUseCase {
  constructor(private addressesRepository: AddressesRepository) {}

  async execute(id: string) {
    await this.addressesRepository.deleteById(id)
  }
}