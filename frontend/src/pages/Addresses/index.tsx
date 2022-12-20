import { Pencil, Plus, Trash } from "phosphor-react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

import { useAddresses } from "../../services/hooks/useAddresses";
import { useAddressesByCustomerId } from "../../services/hooks/useAddressesByCustomerId";
import { useDeleteAddressById } from "../../services/hooks/useDeleteAddressById";
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
  const navigate = useNavigate()
  const { id } = useParams()
  let addresses: any

  if (id) {
    const { data } = useAddressesByCustomerId(id)
    addresses = data
  } else {
    const  { data } = useAddresses()
    addresses = data
  }

  async function modalDeleteAddress(id: string) {
    let response = confirm("Deseja excluir o endereço?")
    if (response) {
      await useDeleteAddressById(id)
    }
  }

  return (
    <AddressesContainer>
      <div>
        <h1>ENDEREÇOS</h1>
        <div>
          <NavLink to={`/address/create/${id}`} title="NOVO ENDEREÇO" end>
            <Plus size={24} />
          </NavLink>
        </div>
      </div>

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
              <th></th>
              <th></th>
            </tr>
          </thead>
          {addresses?.length > 0 ? (
            <tbody>
              {
                addresses?.map((address: Address) => {
                  return (
                    <tr key={address.id}>
                      <td>{address.street}</td>
                      <td>{address.number}</td>
                      <td>{address.neighborhood}</td>
                      <td>{address.cep}</td>
                      <td>{address.city}</td>
                      <td>{address.state}</td>
                      <td>{address.customer_id.slice(0, 8)}</td>
                      <td>
                        <NavLink to={`/addresses/update/${address.id}`}>
                          <Pencil size={16} />
                        </NavLink>
                      </td>
                      <td>
                        <button onClick={() => modalDeleteAddress(address.id)}>
                          <Trash size={16} />
                        </button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          ) :
            <tr>
              <td></td>
              <td></td>
              <td><span><p>Sem registros de endereços.</p></span></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          }
        </table>
      </AddressesList>
    </AddressesContainer>
  )
}