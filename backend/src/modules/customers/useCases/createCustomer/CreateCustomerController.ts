import { Request, Response } from "express";
import { CreateCustomerUseCase } from "./CreateCustomerUseCase";

export class CreateCustomerController {
  async handle(request: Request, response: Response) {
    const { 
      name, 
      birthDate, 
      cpf, 
      rg,
      phone, 
      address 
    } = request.body

    const createCustomerUseCase = new CreateCustomerUseCase()
    const result = await createCustomerUseCase.execute({
      name, birthDate, cpf, rg, phone, address
    })

    return response.json(result)
  }
}