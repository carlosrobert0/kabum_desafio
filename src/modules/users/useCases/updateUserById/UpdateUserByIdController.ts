import { Request, Response } from "express";
import { UpdateUserByIdUseCase } from "./UpdateUserByIdUseCase";

export class UpdateUserByIdController {
  constructor(private updateUserByIdUseCase: UpdateUserByIdUseCase) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params
    const data = request.body
    const dataUpdated = {
      ...data,
      updated_at: new Date()
    }

    const result = await this.updateUserByIdUseCase.execute(id, dataUpdated)

    return response.json(result)
  }
}