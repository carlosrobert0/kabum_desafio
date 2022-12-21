interface AddressDTO {
  cep: string
  street: string
  number: number
  neighborhood: string
  city: string
  state: string
  customer_id: string
}

interface IAddressesRepository {
  create({ 
    cep, 
    street, 
    number, 
    neighborhood, 
    city, 
    state,
    customer_id 
  }: AddressDTO): Promise<void>;
  findAll(id_user: string): Promise<AddressDTO[]>
  findAllByCustomerId(customer_id: string): Promise<AddressDTO[]>
  findById(id: string): Promise<AddressDTO | null>; 
  findByConditionalANDCepStreetNumber(cep: string, street: string, number: number): Promise<any>
  deleteAll(): Promise<void>
  deleteAllAddressesByCustomerId(customer_id: string): Promise<void>
  deleteById(id: string): Promise<void>
  updateById(id: string, data: AddressDTO): Promise<void>
}

export { AddressDTO, IAddressesRepository }