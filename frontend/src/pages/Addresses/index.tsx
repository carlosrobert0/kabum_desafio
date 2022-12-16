import { useParams } from "react-router-dom";

import { useAddresses } from "../../services/hooks/useAddresses";
import { useAddressesByCustomerId } from "../../services/hooks/useAddressesByCustomerId";
import { AddressesContainer, AddressesList } from "./styles";

interface Address {
  id: string;
  street: string;
  number: number;
  cep: string;
  neighborhood: string;
  city: string;
  state: string;
  customer_id: string;
}

export function Addresses() {
  const { id } = useParams() 
  let addresses: any

  if ( id ) {
    const addressData = useAddressesByCustomerId(id)
    addresses = addressData
  } else {
    const { data } = useAddresses()
    addresses = data
  }

  return (
    <AddressesContainer>
      <h1>ENDEREÇOS</h1>

      <AddressesList>
        <table>
          <thead>
            <tr>
              <th>Rua</th>
              <th>Número</th>
              <th>Bairro</th>
              <th>CEP</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Cliente</th>
            </tr>
          </thead>
          <tbody>
            {
              addresses?.data?.map((address: Address) => {
                return (
                  <tr key={address.id}>
                    <td>{address.street}</td>
                    <td>{address.number}</td>
                    <td>{address.neighborhood}</td>
                    <td>{address.cep}</td>
                    <td>{address.city}</td>
                    <td>{address.state}</td>
                    <td>{address.customer_id.slice(0, 8)}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </AddressesList>
    </AddressesContainer>
  )
}