import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { FindAllUsersController } from "./FindAllUsersController";
import { FindAllUsersUseCase } from "./FindAllUsersUseCase";

const usersRepository = new UsersRepository()
const findAllUsersUseCase = new FindAllUsersUseCase(usersRepository)
const findAllUsersController = new FindAllUsersController(findAllUsersUseCase)

export { findAllUsersController }