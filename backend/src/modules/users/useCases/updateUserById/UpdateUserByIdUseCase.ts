import { UserDTO } from "../../repositories/IUsersRepository";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

export class UpdateUserByIdUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(id: string, data: UserDTO) {
    await this.usersRepository.updateById(id, data)
  }
}