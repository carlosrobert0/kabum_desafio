interface Address {
  cep: string
  street: string
  number: number
  neighborhood: string
  city: string
  state: string
}

interface CreateCustomerDTO {
  name: string
  birthDate: Date
  cpf: string
  rg: string
  phone: string
  address?: Address[] | any
}

interface ICustomersRepository {
  create({ 
    name, 
    address, 
    birthDate, 
    cpf, 
    rg, 
    phone 
  }: CreateCustomerDTO): Promise<void>;
  findByCpf(cpf: string): Promise<any>; 
  findAll(): Promise<CreateCustomerDTO[]>
  deleteAll(): Promise<void>
  deleteById(id: string): Promise<void>
  // updateByCpf(cpf: string): Promise<void>
}

export { CreateCustomerDTO, ICustomersRepository }