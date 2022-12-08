import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const {
      name, login, password,
    } = request.body;

    const createUserUseCase = new CreateUserUseCase()
    const result = await createUserUseCase.execute({
      name,
      login,
      password,
    })

    return response.json(result)
  }
}