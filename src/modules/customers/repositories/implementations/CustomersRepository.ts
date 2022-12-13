import { prisma } from "../../../../database/prismaClient"
import { CreateCustomerDTO, ICustomersRepository } from "../ICustomersRepository"

export class CustomersRepository implements ICustomersRepository {
  private static INSTANCE: any

  public static getInstance(): any {
    if(!CustomersRepository.INSTANCE) {
      CustomersRepository.INSTANCE = new CustomersRepository()
    }

    return CustomersRepository.INSTANCE
  }

  async create({ 
    address, 
    birthDate, 
    cpf, 
    name, 
    phone,
    rg
  }: CreateCustomerDTO): Promise<any> {
    if (address) {
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
    } else {
      const customer = await prisma.customers.create({
        data: {
          name,
          birthDate,
          cpf,
          rg,
          phone
        }
      })

      return customer
    } 
  }

  async findByCpf(cpf: string): Promise<any> {
    const customer = await prisma.customers.findFirst({
      where: {
        cpf: {
          equals: cpf,
          mode: 'insensitive'
        }
      }
    })

    if (customer) {
      return customer
    }
    
  }

  async findAll(): Promise<any> {
    const customers = await prisma.customers.findMany({
      include: {
        address: true
      },
    })

    if (customers) {
      return customers
    }
  }

  async deleteById(id: string): Promise<void> {
    await prisma.customers.delete({
      where: {
        id
      },
    })
  }

  async deleteAll(): Promise<void> {
    await prisma.customers.deleteMany()
  }
}