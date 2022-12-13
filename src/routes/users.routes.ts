import { Router } from 'express'
import { createUserController } from '../modules/users/useCases/createUser'
import { findAllUsersController } from '../modules/users/useCases/findAllUsers'

const usersRoutes = Router()

usersRoutes.post("/", (request, response) => {
  return createUserController.handle(request, response)
})

usersRoutes.get("/", (request, response) => {
  return findAllUsersController.handle(request, response)
})

export { usersRoutes }