import { Outlet } from "react-router-dom";
import {
  HeaderStyles,
  Logo,
  Menu,
  MenuItem,
  Cart,
  ProfileOuter,
  ProfileInner,
} from "./Header.styles";
import Search from "../../inputs/search/Search.component";
import { LoginButton } from "../../buttons/Buttons";

function Header() {
  return (
    <>
      <HeaderStyles>
        <Logo>Meubel House</Logo>
        <Search />
        <Menu>
          <MenuItem>Products</MenuItem>
          <MenuItem>Admin</MenuItem>
          <MenuItem>Profile</MenuItem>
        </Menu>
        <Cart>
          <span className="material-symbols-outlined">shopping_cart</span>
        </Cart>
        <ProfileOuter>
          <ProfileInner>
            <p>OO</p>
          </ProfileInner>
        </ProfileOuter>
        <LoginButton>Login</LoginButton>
      </HeaderStyles>

      <Outlet />
    </>
  );
}

export default Header;
