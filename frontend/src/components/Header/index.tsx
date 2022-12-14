import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src=""  alt="logo kabum" />
      <nav>
        <NavLink to="/customers" title="Clientes" end>

        </NavLink>
        <NavLink to="/addresses" title="Endereços" end>
          
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}