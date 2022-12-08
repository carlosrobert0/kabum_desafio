import { prisma } from "../../../../database/prismaClient";

interface Address {
  cep: string
  street: string
  number: number
  neighborhood: string
  city: string
  state: string
}

interface CreateCustomer {
  name: string
  birthDate: Date
  cpf: string
  rg: string
  phone: string
  address: Address
}

export class CreateCustomerUseCase {
  async execute({
    name, birthDate, cpf, rg, phone, address }: CreateCustomer) {
    const customerExists = await prisma.customers.findFirst({
      where: {
        name: {
          equals: name,
          mode: 'insensitive'
        }
      }
    })

    if (customerExists) {
      throw new Error("Customer already exists")
    }

    const customer = await prisma.customers.create({
      data: {
        name,
        birthDate,
        cpf,
        rg,
        phone,
        address: {
          create: [
            {
              cep: address.cep,
              neighborhood: address.neighborhood,
              number: address.number,
              city: address.city,
              state: address.state,
              street: address.street
            }
          ]
        }
      },
      include: {
        address: true
      }
    })

    return customer
  }
}