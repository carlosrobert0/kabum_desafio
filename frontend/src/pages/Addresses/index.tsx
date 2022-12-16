import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useAddresses } from "../../services/hooks/useAddresses";
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

  const { data } = useAddresses()

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
              data?.map((address: Address) => {
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