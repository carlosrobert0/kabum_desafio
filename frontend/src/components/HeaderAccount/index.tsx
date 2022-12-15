import { Plus, SignIn, Users } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";

import logo from '../../assets/logo.png'

export function HeaderAccount() {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo kabum" width={32} height={32} />
      
      <nav>
        <NavLink to="/" title="Logar" end>
          <SignIn size={24} />
        </NavLink>
        <NavLink to="/register" title="Criar conta" end>
          <Plus size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}