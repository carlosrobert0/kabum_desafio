import { prisma } from "../../../../database/prismaClient";
import { CreateUserDTO, IUserRepository } from "../IUsersRepository";

export class UsersRepository implements IUserRepository {
  private static INSTANCE: any

  public static getInstance(): any {
    if(!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository()
    }

    return UsersRepository.INSTANCE
  }
  
  async create({ name, login, password }: CreateUserDTO): Promise<any> {
    const user = await prisma.users.create({
      data: {
        name,
        login,
        password
      },
    })

    return user
  }

  async findAll(): Promise<any> {
    const users = await prisma.users.findMany()
    
    return users
  }

  async findUserExists(login: string): Promise<any> {
    const user = await prisma.users.findFirst({
      where: {
        login: {
          equals: login,
          mode: 'insensitive'
        },
      }
    })

    return user
  }
}