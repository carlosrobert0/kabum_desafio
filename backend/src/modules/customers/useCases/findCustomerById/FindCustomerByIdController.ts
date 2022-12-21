import { Request, Response } from "express";
import { FindCustomerByIdUseCase } from "./FindCustomerByIdUseCase";

export class FindCustomerByIdController {
  constructor(private findCustomerByIdUseCase: FindCustomerByIdUseCase) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params

    const result = await this.findCustomerByIdUseCase.execute(id)

    return response.json(result)
  }
}