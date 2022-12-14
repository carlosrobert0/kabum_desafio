import { Request, Response } from "express";
import { FindAllUsersUseCase } from "./FindAllUsersUseCase";

export class FindAllUsersController {
  constructor(private findAllUsersUseCase: FindAllUsersUseCase) {}

  async handle(request: Request, response: Response) {
    const result = await this.findAllUsersUseCase.execute()

    return response.json(result)
  }
}