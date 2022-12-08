import { Request, Response } from "express";
import { FindAllCustomersUseCase } from "./FindAllCustomersUseCase";

export class FindAllCustomersController {
  async handle(request: Request, response: Response) {
    const findAllCustomersUseCase = new FindAllCustomersUseCase()
    
    const result = await findAllCustomersUseCase.execute()

    return response.json(result)
  }
}