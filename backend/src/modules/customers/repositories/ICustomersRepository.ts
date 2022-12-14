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
  }: CustomerDTO): Promise<void>;
  findByCpf(cpf: string): Promise<CustomerDTO | null>; 
  findAll(): Promise<CustomerDTO[]>
  deleteAll(): Promise<void>
  deleteById(id: string): Promise<void>
  updateById(id: string, data: CustomerDTO): Promise<void>
}

export { CustomerDTO, ICustomersRepository }