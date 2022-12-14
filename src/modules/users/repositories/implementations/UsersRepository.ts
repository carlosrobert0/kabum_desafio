import { prisma } from "../../../../database/prismaClient"
import { UserDTO, IUsersRepository } from "../IUsersRepository"

export class UsersRepository implements IUsersRepository {
  private static INSTANCE: any

  public static getInstance(): any {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository()
    }

    return UsersRepository.INSTANCE
  }

  async create({
    name,
    login,
    password
  }: UserDTO): Promise<any> {
    const user = await prisma.users.create({
      data: {
        name,
        login,
        password
      },
      select: {
        name: true,
        login: true,
        created_at: true,
        updated_at: true
      }
    })

    return user
  }

  async findUserExists(login: string): Promise<any> {
    const user = await prisma.users.findFirst({
      where: {
        login: {
          equals: login,
          mode: 'insensitive'
        }
      }
    })

    return user
  }


  async findAll(): Promise<any> {
    const users = await prisma.users.findMany({
      select: {
        id: true,
        name: true,
        login: true,
        created_at: true,
        updated_at: true
      }
    })

    return users
  }

  async updateById(id: string, data: UserDTO): Promise<void> {
    await prisma.users.update({
      where: {
        id
      },
      data: {
        name: data.name,
        login: data.login,
        password: data.password
      }
    })
  }
}