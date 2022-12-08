import { prisma } from "../../../../database/prismaClient";

export class FindAllAddressesUseCase {
  async execute() {
    const addresses = await prisma.address.findMany({})

    return addresses
  }
}