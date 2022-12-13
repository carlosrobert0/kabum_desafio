import { Request, Response } from "express";
import { DeleteAllCustomersUseCase } from "./DeleteAllCustomersUseCase";

export class DeleteAllCustomersController {
  constructor(private deleteAllCustomersUseCase: DeleteAllCustomersUseCase) {}

  async handle(request: Request, response: Response) {
    const result = await this.deleteAllCustomersUseCase.execute()

    return response.json(result)
  }
}