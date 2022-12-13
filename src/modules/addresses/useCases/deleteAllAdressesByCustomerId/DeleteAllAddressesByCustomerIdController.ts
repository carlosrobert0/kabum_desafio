import { Request, Response } from "express";
import { DeleteAllAddressesOfCustomerIdUseCase } from "./DeleteAllAddressesByCustomerIdUseCase";

export class DeleteAllAddressesByCustomerIdController {
  constructor(private deleteAllAddressesByCustomerIdUseCase: DeleteAllAddressesOfCustomerIdUseCase) {}

  async handle(request: Request, response: Response) {
    const { customer_id } = request.params

    const result = await this.deleteAllAddressesByCustomerIdUseCase.execute(customer_id)

    return response.json(result)
  }
}