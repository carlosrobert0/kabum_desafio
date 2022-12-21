import { Request, Response } from "express";
import { FindAllCustomersUseCase } from "./FindAllCustomersUseCase";

export class FindAllCustomersController {
  constructor(private findAllCustomersUseCase: FindAllCustomersUseCase) {}

  async handle(request: Request, response: Response) {
    const { id_user } = request

    const result = await this.findAllCustomersUseCase.execute(id_user)

    return response.json(result)
  }
}