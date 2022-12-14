import { UsersRepository } from "../../../users/repositories/implementations/UsersRepository"
import { UpdateUserByIdController } from "./UpdateuserByIdController"
import { UpdateUserByIdUseCase } from "./UpdateUserByIdUseCase"

const usersRepository = UsersRepository.getInstance()
const updateUserByIdUseCase = new UpdateUserByIdUseCase(usersRepository)
const updateUserByIdController = new UpdateUserByIdController(updateUserByIdUseCase)

export { updateUserByIdController }
