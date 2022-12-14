import { Router } from 'express'
import { createUserController } from '../modules/users/useCases/createUser'
import { findAllUsersController } from '../modules/users/useCases/findAllUsers'
import { updateUserByIdController } from '../modules/users/useCases/updateUserById'

const usersRoutes = Router()

usersRoutes.post("/", (request, response) => {
  return createUserController.handle(request, response)
})

usersRoutes.get("/", (request, response) => {
  return findAllUsersController.handle(request, response)
})

usersRoutes.put("/:id", (request, response) => {
  return updateUserByIdController.handle(request, response)
})

export { usersRoutes }