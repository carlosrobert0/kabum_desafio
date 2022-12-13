import { AddressDTO } from "../../repositories/IAddressesRepository";
import { AddressesRepository } from "../../repositories/implementations/AddressesRepository";

export class UpdateAddressByIdUseCase {
  constructor(private addressesRepository: AddressesRepository) {}

  async execute(id: string, data: AddressDTO) {
    await this.addressesRepository.updateById(id, data)
  }
}