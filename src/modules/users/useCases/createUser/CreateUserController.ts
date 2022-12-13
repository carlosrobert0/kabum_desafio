import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  async handle(request: Request, response: Response) {
    const {
      name, login, password,
    } = request.body;

    const result = await this.createUserUseCase.execute({
      name,
      login,
      password,
    })

    return response.json(result)
  }
}