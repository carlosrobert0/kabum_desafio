import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}

  async handle(request: Request, response: Response) {
    const { login, password } = request.body

    try {
      const result = await this.authenticateUserUseCase.execute({
        login,
        password
      })
  
      return response.json(result)
    } catch (error: any) {
      return response.status(400).json({
        message: error.message
      })
    }
  }
}