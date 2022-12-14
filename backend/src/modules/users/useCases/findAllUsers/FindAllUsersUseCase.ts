import { UsersRepository } from "../../repositories/implementations/UsersRepository"

export class FindAllUsersUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute() {
    const users = this.usersRepository.findAll()

    return users
  }
}