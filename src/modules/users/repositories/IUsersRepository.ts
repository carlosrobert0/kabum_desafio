
interface CreateUserDTO {
  name: string;
  login: string;
  password: string;
}

interface IUserRepository {
  create({ name, login, password }: CreateUserDTO): Promise<any>
  findAll(): Promise<any>
  findUserExists(login: string): Promise<any>
}

export { CreateUserDTO, IUserRepository }