interface Address {
  cep: string
  street: string
  number: number
  neighborhood: string
  city: string
  state: string
}

interface CustomerDTO {
  name: string
  birthDate: Date
  cpf: string
  rg: string
  phone: string
  userId: string
  address?: Address[] | any
}

interface ICustomersRepository {
  create({ 
    name, 
    address, 
    birthDate, 
    cpf, 
    rg, 
    phone,
    userId,
  }: CustomerDTO): Promise<void>;
  findByCpf(cpf: string): Promise<CustomerDTO | null>; 
  findAll(id_user: string): Promise<CustomerDTO[]>
  deleteAll(): Promise<void>
  deleteById(id: string): Promise<void>
  updateById(id: string, data: CustomerDTO): Promise<void>
  findById(id: string): Promise<CustomerDTO>
}

export { CustomerDTO, ICustomersRepository }