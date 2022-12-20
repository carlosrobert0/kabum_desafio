import { PushPin, SignOut, Users } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";

import logo from '../../assets/logo.png'
import { useAuth } from "../../hooks/auth";

export function Header() {
  const { signOut } = useAuth()
  
  return (
    <HeaderContainer>
      <NavLink to="/customers" title="Home" end>
        <img src={logo} alt="logo kabum" width={32} height={32} />
      </NavLink>
      <nav>
        <NavLink to="/customers" title="Clientes" end>
          <Users size={24} />
        </NavLink>
        <NavLink to="/addresses" title="Endereços" end>
          <PushPin size={24} />
        </NavLink>
        <button onClick={signOut}>
          <SignOut size={24} />
        </button>
      </nav>
    </HeaderContainer>
  )
}