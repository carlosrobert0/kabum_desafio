import { CustomersContainer, CustomersList } from "./styles";

export function Customers() {
  return (
    <CustomersContainer>
      <h1>Clientes</h1>

      <CustomersList>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Data Nascimento</th>
              <th>CPF</th>
              <th>RG</th>
              <th>Telefone</th>
              <th>Endereços</th>
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
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
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
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>Concluido</td>
              <td>Concluido</td>
              <td>Concluido</td>
            </tr>
          </tbody>
        </table>
      </CustomersList>
    </CustomersContainer>
  )
}