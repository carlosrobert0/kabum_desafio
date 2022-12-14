import { Request, Response } from "express";
import { DeleteAddressByIdUseCase } from "./DeleteAddressByIdUseCase";

export class DeleteAddressByIdController {
  constructor(private deleteAddressByIdUseCase: DeleteAddressByIdUseCase) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params

    const result = await this.deleteAddressByIdUseCase.execute(id)

    return response.json(result)
  }
}