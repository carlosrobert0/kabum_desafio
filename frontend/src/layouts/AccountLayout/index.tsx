import { Outlet } from "react-router-dom";
import { HeaderAccount } from "../../components/HeaderAccount";
import { LayoutContainer } from "./styles";

export function AccountLayout() {
  return (
    <LayoutContainer>
      <HeaderAccount />
      <Outlet />
    </LayoutContainer>
  )
}