import { prisma } from "../../../../database/prismaClient";

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
  async execute({
    cep,
    street,
    number,
    neighborhood,
    city,
    state,
    customer_id
  }: CreateAddress) {
    const addressExists = await prisma.address.findFirst({
      where: {
        AND: {
          cep: {
            equals: cep,
            mode: 'insensitive'
          },
          street: {
            equals: street,
            mode: 'insensitive'
          },
          number: {
            equals: number
          },
        }
      }
    })

    if (addressExists) {
      throw new Error("Address already exists")
    }

    const address = await prisma.address.create({
      data: {
        cep,
        street,
        number,
        neighborhood,
        city,
        state,
        customer_id
      }
    })

    return address
  }
}