import { PushPin, Users } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";

import logo from '../../assets/logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo}  alt="logo kabum" width={32} height={32} />
      <nav>
        <NavLink to="/customers" title="Clientes" end>
          <Users size={24} />
        </NavLink>
        <NavLink to="/addresses" title="Endereços" end>
          <PushPin size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}