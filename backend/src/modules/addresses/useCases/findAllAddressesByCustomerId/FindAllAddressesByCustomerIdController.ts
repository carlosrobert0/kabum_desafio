import { Request, Response } from "express";
import { FindAllAddressesByCustomerIdUseCase } from "./FindAllAddressesByCustomerIdUseCase";

export class FindAllAddressesByCustomerIdController {
  constructor(private findAllAddressesByCustomerIdUseCase: FindAllAddressesByCustomerIdUseCase) {}

  async handle(request: Request, response: Response) {
    const { customer_id } = request.params

    const result = await this.findAllAddressesByCustomerIdUseCase.execute(customer_id)

    return response.json(result)
  }
}