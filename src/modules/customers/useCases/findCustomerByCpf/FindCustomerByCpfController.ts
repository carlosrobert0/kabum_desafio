import { Request, Response } from "express";
import { FindCustomerByCpfUseCase } from "./FindCustomerByCpfUseCase";

export class FindCustomerByCpfController {
  constructor(private findCustomerByCpfUseCase: FindCustomerByCpfUseCase) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params

    const result = await this.findCustomerByCpfUseCase.execute(id)

    return response.json(result)
  }
}