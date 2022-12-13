import { hash } from "bcrypt"; 
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

interface CreateUser {
  name: string;
  login: string;
  password: string;
}

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ name, login, password }: CreateUser) {
    const userExists = await this.usersRepository.findUserExists(login)

    if(userExists) {
      throw new Error("User already exists")
    }

    const hashPassword = await hash(password, 10)

    const user = await this.usersRepository.create({
      name,
      login,
      password: hashPassword
    })

    return user
  }
}