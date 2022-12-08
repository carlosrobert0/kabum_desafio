import { prisma } from "../../../../database/prismaClient";

export class FindAllCustomersUseCase {
  async execute() {
    const customers = await prisma.customers.findMany({
      include: {
        address: true
      },
    })

    return customers
  }
}