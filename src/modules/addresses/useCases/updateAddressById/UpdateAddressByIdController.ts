import { Request, Response } from "express";
import { UpdateAddressByIdUseCase } from "./UpdateAddressByIdUseCase";

export class UpdateAddressByIdController {
  constructor(private updateAddressByIdUseCase: UpdateAddressByIdUseCase) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params
    const data = request.body
    const dataUpdated = {
      ...data,
      updated_at: new Date()
    }

    const result = await this.updateAddressByIdUseCase.execute(id, dataUpdated)

    return response.json(result)
  }
}