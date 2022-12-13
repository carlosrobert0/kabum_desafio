import { Request, Response } from "express";
import { UpdateCustomerByIdUseCase } from "./UpdateCustomersByIdUseCase";

export class UpdateCustomerByIdController {
  constructor(private updateCustomerByIdUseCase: UpdateCustomerByIdUseCase) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params
    const data = request.body
    const dataUpdated = {
      ...data,
      updated_at: new Date()
    }

    const result = await this.updateCustomerByIdUseCase.execute(id, dataUpdated)

    return response.json(result)
  }
}