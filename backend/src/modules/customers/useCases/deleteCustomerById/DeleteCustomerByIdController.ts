import { Request, Response } from "express";
import { DeleteCustomerByIdUseCase } from "./DeleteCustomerByIdUseCase";

export class DeleteCustomerByIdController {
  constructor(private deleteCustomerByIdUseCase: DeleteCustomerByIdUseCase) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params

    const result = await this.deleteCustomerByIdUseCase.execute(id)

    return response.json(result)
  }
}