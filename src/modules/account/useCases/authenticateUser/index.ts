
import { UsersRepository } from "../../../users/repositories/implementations/UsersRepository"
import { AuthenticateUserController } from "./AuthenticateUserController"
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"

const usersRepository = UsersRepository.getInstance()
const authenticaseUserUseCase = new AuthenticateUserUseCase(usersRepository)
const authenticateUserController = new AuthenticateUserController(authenticaseUserUseCase)

export { authenticateUserController }