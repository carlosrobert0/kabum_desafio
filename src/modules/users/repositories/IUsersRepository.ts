interface UserDTO {
  name: string;
  login: string;
  password: string;
}

interface IUsersRepository {
  create({ 
    name, 
    login,
    password 
  }: UserDTO): Promise<void>;

  findAll(): Promise<UserDTO[]>
  findUserExists(login: string): Promise<any>
  updateById(id: string, data: UserDTO): Promise<void>
}

export { UserDTO, IUsersRepository }