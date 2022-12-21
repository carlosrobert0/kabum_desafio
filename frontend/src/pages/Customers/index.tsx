import { Link, Minus, Pencil, Plus, Trash } from "phosphor-react";
import { useEffect } from "react";
import { isError } from "react-query";
import { Navigate, NavLink, useFetcher, useNavigate } from "react-router-dom";
import { useCustomers } from "../../services/hooks/useCustomers";
import { deleteCustomerById, useDeleteCustomerById } from "../../services/hooks/useDeleteCustomerById";

import { CustomersContainer, CustomersList } from "./styles";

export function Customers() {
  const { data, isLoading, isFetching, isError, error, refetch } = useCustomers()

  const navigate = useNavigate()

  function formatBirthDate(birthDate: Date) {
    const birthDateFormatted = new Date(birthDate).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
    return birthDateFormatted
  }

  async function modalDeleteCustomer(id: string) {
    let deleteCustomer = confirm("Deseja excluir o cliente?")

    deleteCustomer && await deleteCustomerById(id)
    refetch()
  }

  useEffect(() => {
    if (data) {
      window.location.href = window.location.href
    }
  }, [])

  return (
    <CustomersContainer>
      <div>
        <h1>CLIENTES</h1>
        <div>
          <NavLink to="/customer/create" title="NOVO CLIENTE" end>
            <Plus size={24} />
          </NavLink>
        </div>
      </div>

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
              {data?.length ? (
                <>
                  <th></th>
                  <th></th>
                </>
              ) : <></>}
            </tr>
          </thead>
          {data?.length ? (
            <tbody>
              {
                data?.map((customer: any) => {
                  return (
                    <tr key={customer.id}>
                      <td>{customer.name}</td>
                      <td>{formatBirthDate(customer.birthDate)}</td>
                      <td>{customer.cpf}</td>
                      <td>{customer.rg}</td>
                      <td>{customer.phone}</td>
                      <td>
                        <NavLink to={`/addresses/customerId/${customer.id}`}>
                          <a>{customer.address.length} <Link /></a>
                        </NavLink>
                      </td>
                      <td>
                        <NavLink to={`/customer/update/${customer.id}`}>
                          <Pencil size={16} />
                        </NavLink>
                      </td>
                      <td>
                        <button onClick={() => modalDeleteCustomer(customer.id)}>
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
              <td><span><p>Sem registros de clientes.</p></span></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          }
        </table>
      </CustomersList >
    </CustomersContainer >
  )
}
