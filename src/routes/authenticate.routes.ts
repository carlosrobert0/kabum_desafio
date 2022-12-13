import { Router } from "express";
import { authenticateUserController } from "../modules/account/useCases/authenticateUser";

const authenticateRoutes = Router()

authenticateRoutes.post("/", (request, response) => {
  authenticateUserController.handle(request, response)
})

export { authenticateRoutes }