import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { UsersRepository } from "../../../users/repositories/implementations/UsersRepository";

interface AuthenticateUser {
  login: string;
  password: string;
}

export class AuthenticateUserUseCase {
  constructor(private usersRepository: UsersRepository) { }

  async execute({ login, password }: AuthenticateUser): Promise<any> {
    const user = await this.usersRepository.findUserExists(login)

    if (!user) {
      throw new Error("Login ou senha inválidos!")
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error("Login ou senha inválidos!")
    }

    const token = sign({login}, "03d810e18c3bc6218e3a8afaf5b58c16", {
      subject: user.id,
      expiresIn: "1d"
    })
    
    return token
  }
}