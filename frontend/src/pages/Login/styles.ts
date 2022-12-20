import styled from "styled-components";

export const LoginContainer = styled.div`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme["orange-500"]};
    margin-bottom: 2.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
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
`

export const ButtonSubmit = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 0.215rem;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  background-color: ${({ theme }) => theme['orange-500']};
  color: ${({ theme }) => theme['gray-100']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  &:not(:disabled):hover {
    background: ${({ theme }) => theme['orange-300']};
    transition: all 0.2s;
    border: 0;
  }
`