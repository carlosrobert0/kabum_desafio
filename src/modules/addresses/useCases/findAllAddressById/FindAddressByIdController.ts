import { Request, Response } from "express";
import { FindAddressByIdUseCase } from "./FindAddressByIdUseCase";

export class FindAddressByIdController {
  constructor(private findAddressByIdUseCase: FindAddressByIdUseCase) {}

  async handle(request: Request, response: Response) {
    const result = await this.findAddressByIdUseCase.execute()

    return response.json(result)
  }
}