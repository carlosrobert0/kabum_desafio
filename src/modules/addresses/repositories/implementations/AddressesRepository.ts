import { prisma } from "../../../../database/prismaClient"
import { AddressDTO, IAddressesRepository } from "../IAddressesRepository"

export class AddressesRepository implements IAddressesRepository {
  private static INSTANCE: any

  public static getInstance(): any {
    if(!AddressesRepository.INSTANCE) {
      AddressesRepository.INSTANCE = new AddressesRepository()
    }

    return AddressesRepository.INSTANCE
  }

  async create({ 
    cep, 
    street, 
    number, 
    neighborhood, 
    city, 
    state,
    customer_id
  }: AddressDTO
  ): Promise<void> {
    await prisma.address.create({
      data: {
        cep,
        street,
        number,
        neighborhood,
        city,
        state,
        customer_id
      },
    })
  }

  async findAll(): Promise<any> {
    return await prisma.address.findMany()
  }

  async findByConditionalANDCepStreetNumber(cep: any, street: any, number: any) {
    const address = await prisma.address.findFirst({
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

    if (address) {
      return address
    }
  }

  async deleteAll(): Promise<any> {
    await prisma.address.deleteMany()
  }
  
  async deleteById(id: string): Promise<void> {
    await prisma.address.delete({
      where: {
        id
      },
    })
  }

  async deleteAllAddressesByCustomerId(customer_id: string): Promise<void> {
    await prisma.customers.update({
      where: {
        id: customer_id,
      },
      data: {
        address: {
          deleteMany: {},
        },
      },
    })
  }

  async updateById(id: string, data: AddressDTO): Promise<void> {
    await prisma.address.update({
      where: {
        id
      },
      data: data,
    })
  }

  async findById(id: string): Promise<AddressDTO | null> {
    const address = await prisma.address.findUnique({
      where: {
        id
      }
    })

    if (address) {
      return address
    }
    
    return null
  }
}