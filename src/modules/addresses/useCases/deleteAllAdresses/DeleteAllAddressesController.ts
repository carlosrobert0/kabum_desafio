import { Request, Response } from "express";
import { DeleteAllAddressesUseCase } from "./DeleteAllAddressesUseCase";

export class DeleteAllAddressesController {
  constructor(private deleteAllAddressesUseCase: DeleteAllAddressesUseCase) {}

  async handle(request: Request, response: Response) {
    const result = await this.deleteAllAddressesUseCase.execute()

    return response.json(result)
  }
}