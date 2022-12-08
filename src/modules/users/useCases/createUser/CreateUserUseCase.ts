import { hash } from "bcrypt"; 
import { prisma } from "../../../../database/prismaClient";

interface CreateUser {
  name: string;
  login: string;
  password: string;
}

export class CreateUserUseCase {
  async execute({ name, login, password }: CreateUser) {
    const userExists = await prisma.users.findFirst({
      where: {
        login: {
          equals: login,
          mode: 'insensitive'
        }
      }
    })

    if(userExists) {
      throw new Error("User already exist")
    }

    const hashPassword = await hash(password, 10)

    const user = await prisma.users.create({
      data: {
        name,
        login,
        password: hashPassword,
      }
    })

    return user
  }
}