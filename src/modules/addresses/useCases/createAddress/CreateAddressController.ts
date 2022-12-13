import { Request, Response } from "express";
import { CreateAddressUseCase } from "./CreateAddressUseCase";

export class CreateAddressController {
  constructor(private createAddressUseCase: CreateAddressUseCase) {}

  async handle(request: Request, response: Response) {
    const {
      cep,
      street,
      number,
      neighborhood,
      city,
      state,
      customer_id
    } = request.body

    const result = await this.createAddressUseCase.execute({
      cep,
      street,
      number,
      neighborhood,
      city,
      state,
      customer_id
    })

    return response.json(result)
  }
}