import { AddressesContainer, AddressesList } from "./styles";

export function Addresses() {
  return (
    <AddressesContainer>
      <h1>Endereços</h1>

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
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>Concluido</td>
              <td>Concluido</td>
              <td>Concluido</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>Concluido</td>
              <td>Concluido</td>
              <td>Concluido</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>Concluido</td>
              <td>Concluido</td>
              <td>Concluido</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>Concluido</td>
              <td>Concluido</td>
              <td>Concluido</td>
              <td>Concluido</td>
            </tr>
          </tbody>
        </table>
      </AddressesList>
    </AddressesContainer>
  )
}