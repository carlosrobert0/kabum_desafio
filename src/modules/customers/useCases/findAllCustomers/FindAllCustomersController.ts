import { Request, Response } from "express";
import { FindAllCustomersUseCase } from "./FindAllCustomersUseCase";

export class FindAllCustomersController {
  constructor(private findAllCustomersUseCase: FindAllCustomersUseCase) {}

  async handle(request: Request, response: Response) {
    const result = await this.findAllCustomersUseCase.execute()

    return response.json(result)
  }
}