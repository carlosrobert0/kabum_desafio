import styled from "styled-components";

export const AddressContainer = styled.div`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme["orange-500"]};
    margin-bottom: 2.5rem;
  }

  form {
    width: 100%;
    display: flex;
    justify-content: space-between;

    hr {
      width: 1px;
      opacity: 0.1;
      margin-top: 5%;
      height: 24rem;
    }

    h3 {
      font-size: 0.875rem;
      color: ${({ theme }) => theme["gray-100"]};
    }
  }

  span {
    width: 25rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin-top: 0.75rem;
    display: flex;
    justify-content: space-between;

    a {
      font-weight: 500;
      text-decoration: none;
      color: ${({ theme }) => theme["orange-500"]};
    }
  }
`

export const WrapperInput = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  position: relative;
  flex-direction: column;
  margin-bottom: 2.5rem;

  input {
    width: 26rem;
    height: 3rem;
    border: 1px solid ${({ theme }) => theme["gray-800"]};
    font-size: 1rem;
    line-height: 1.5rem;
    background: ${({ theme }) => theme["gray-700"]};
    color: ${({ theme }) => theme['gray-100']};
    border-radius: 0.215rem;
    padding-left: 1rem;
    padding-right: 1rem;
    
    &:focus {
      box-shadow: none;
      transition: all 0.4s;
      border-color: ${({ theme }) => theme['orange-500']};
    }

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }
  }

  label {
    top: -1.25rem;
    position: absolute;
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: ${({ theme }) => theme['gray-100']};
  }

  p {
    color: ${({ theme }) => theme["red-500"]};
    opacity: 0.9;
  }
`

export const ButtonSubmit = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 0.215rem;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  font-weight: bold;

  cursor: pointer;

  background-color: ${({ theme }) => theme['orange-500']};
  color: ${({ theme }) => theme['gray-100']};

  &:hover {
    transition: all 0.2s;
    background: ${({ theme }) => theme['orange-300']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme['orange-300']};
  }
`

export const SelectInput = styled.select`
  width: 26rem;
  margin-top: 2.5rem;
  padding: 1rem;
  text-align: left;
  color: ${({ theme }) => theme["gray-100"]};
  font-size: 1rem;
  overflow-y: hidden;
  line-height: 1.6;
  border: 1px solid ${({ theme }) => theme["gray-800"]};
  background: ${({ theme }) => theme["gray-700"]};
  color: ${({ theme }) => theme['gray-100']};
  border-radius: 0.215rem;

  &:first-child {
    border-top-left-radius: 8px;
    padding-left: 1.5rem;
  }
  
  &:last-child {
    border-top-right-radius: 8px;
    padding-left: 1.5rem;
  }
  
  option {
    height: 3rem;
    border-bottom: 1px solid ${({ theme }) => theme["gray-600"]};
    border-top: 1px solid ${({ theme }) => theme["gray-600"]};
    color: ${({ theme }) => theme['gray-300']};
    display: flex;
    align-items: center;
    padding-left: 1rem;
    justify-content: space-between;

    &:hover {
      transform: all 0.5s;
      background-color: ${({ theme }) => theme["orange-100"]};
    }
  }
`
