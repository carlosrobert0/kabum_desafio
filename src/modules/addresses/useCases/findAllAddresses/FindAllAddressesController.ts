import { Request, Response } from "express";
import { FindAllAddressesUseCase } from "./FindAllAddressesUseCase";

export class FindAllAddressesController {
  constructor(private findAllAddressesUseCase: FindAllAddressesUseCase) {}

  async handle(request: Request, response: Response) {
    const result = await this.findAllAddressesUseCase.execute()

    return response.json(result)
  }
}