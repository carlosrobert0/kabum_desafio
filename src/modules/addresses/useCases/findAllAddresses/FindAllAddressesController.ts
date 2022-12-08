import { Request, Response } from "express";
import { FindAllAddressesUseCase } from "./FindAllAddressesUseCase";

export class FindAllAddressesController {
  async handle(request: Request, response: Response) {
    const findAllAddressesUseCase = new FindAllAddressesUseCase()
    
    const result = await findAllAddressesUseCase.execute()

    return response.json(result)
  }
}