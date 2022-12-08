import { Request, Response } from "express";
import { CreateAddressUseCase } from "./CreateAddressUseCase";

export class CreateAddressController {
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

    const createAddressUseCase = new CreateAddressUseCase()
    const result = await createAddressUseCase.execute({
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