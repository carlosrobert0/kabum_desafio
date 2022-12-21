import { Request, Response } from "express";
import { FindAllAddressesUseCase } from "./FindAllAddressesUseCase";

export class FindAllAddressesController {
  constructor(private findAllAddressesUseCase: FindAllAddressesUseCase) {}

  async handle(request: Request, response: Response) {
    const { id_user } = request
    const result = await this.findAllAddressesUseCase.execute(id_user)

    return response.json(result)
  }
}