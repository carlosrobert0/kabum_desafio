import { prisma } from "../../../../database/prismaClient"
import { CustomerDTO, ICustomersRepository } from "../ICustomersRepository"

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
  }: CustomerDTO): Promise<any> {
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
        },
        include: {
          address: true
        }
      })

      return customer
    } 
  }

  async findByCpf(cpf: string): Promise<CustomerDTO | null> {
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
    
    return null
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

  async updateById(id: string, data: CustomerDTO): Promise<void> {
    await prisma.customers.update({
      where: {
        id
      },
      data: {
        name: data.name,
        birthDate: data.birthDate,
        cpf: data.cpf,
        phone: data.phone,
        rg: data.rg,
      },
      include: {
        address: true
      }
    })
  }
}