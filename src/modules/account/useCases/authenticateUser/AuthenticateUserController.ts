import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}

  async handle(request: Request, response: Response) {
    const { login, password } = request.body

    const result = await this.authenticateUserUseCase.execute({
      login,
      password
    })

    return response.json(result)
  }
}