import { CustomersContainer, CustomersList } from "./styles";
import { NavLink } from "react-router-dom";
import { useCustomers } from "../../services/hooks/useCustomers";

export function Customers() {
  const { data, isLoading, error } = useCustomers()

  function formatBirthDate(birthDate: Date) {
    const birthDateFormatted = new Date(birthDate).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
    return birthDateFormatted
  }

  return (
    <CustomersContainer>
      <h1>CLIENTES</h1>
      
      <CustomersList>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Data de nascimento</th>
              <th>CPF</th>
              <th>RG</th>
              <th>Telefone</th>
              <th>Endereços</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.map((customer) => {
                return (
                  <tr key={customer.id}>
                    <td>{customer.name}</td>
                    <td>{formatBirthDate(customer.birthDate)}</td>
                    <td>{customer.cpf}</td>
                    <td>{customer.rg}</td>
                    <td>{customer.phone}</td>
                    <td>
                      <NavLink to={`/addresses/${customer.id}`}>
                        <a>{customer.address.length}</a>
                      </NavLink>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </CustomersList>
    </CustomersContainer>
  )
}