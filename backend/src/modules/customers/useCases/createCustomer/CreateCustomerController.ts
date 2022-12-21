import { Request, Response } from "express";

import { CreateCustomerUseCase } from "./CreateCustomerUseCase";
export class CreateCustomerController {
  constructor(private createCustomerUseCase: CreateCustomerUseCase){}

  async handle(request: Request, response: Response) {
    const {
      name,
      birthDate,
      cpf,
      rg,
      phone,
      address
    } = request.body
    
    const { id_user } = request

    try {
      const result = await this.createCustomerUseCase.execute({
        name, birthDate, cpf, rg, phone, userId: id_user, address
      })

      return response.json(result)
    } catch (error) {
      
    }
  }
}