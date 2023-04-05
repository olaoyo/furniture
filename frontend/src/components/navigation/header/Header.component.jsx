import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { Outlet, Link } from "react-router-dom";
import {
  HeaderStyles,
  LogoGrid,
  Logo,
  Menu,
  MenuItem,
  Cart,
  ProfileOuter,
  ProfileInner,
} from "./Header.styles";
import Search from "../../inputs/search/Search.component";
import { LoginButton } from "../../buttons/Buttons";
import MeubelHouseLogo from "./img/MeubelHouseLogo.png";
import { routeURL } from "../../../api/api";

import { logout } from "../../../redux/actions/userActions";

import formatNameAtPositionZero from "../../../utils/formatName[0]";

function Header() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.userLogin);

  const logoutHandler = () => {
    dispatch(logout());
    navigate(routeURL.home);
  };

  return (
    <>
      <HeaderStyles>
        <LogoGrid>
          <Link to={routeURL.furniture.home}>
            <Logo src={MeubelHouseLogo} />
          </Link>
        </LogoGrid>

        <Search />

        <Menu>
          <Link to={routeURL.furniture.shop}>
            <MenuItem>Shop</MenuItem>
          </Link>
          {userInfo ? (
            <>
              <Link to={routeURL.auth.admin}>
                <MenuItem>Admin</MenuItem>
              </Link>
              <Link to={routeURL.auth.profile}>
                <MenuItem>Profile</MenuItem>
              </Link>
            </>
          ) : (
            ``
          )}
        </Menu>

        <Cart>
          <Link to={routeURL.cart}>
            <span className="material-symbols-outlined">shopping_cart</span>
          </Link>
        </Cart>

        {userInfo ? (
          <>
            <ProfileOuter>
              <ProfileInner>
                <p>{formatNameAtPositionZero(userInfo)}</p>
              </ProfileInner>
            </ProfileOuter>
            <LoginButton onClick={logoutHandler}>Logout</LoginButton>
          </>
        ) : (
          <>
            <ProfileOuter>
              <ProfileInner>
                <span className="material-symbols-outlined">person</span>
              </ProfileInner>
            </ProfileOuter>
            <LoginButton>
              <Link to={routeURL.auth.login}>Login</Link>
            </LoginButton>
          </>
        )}
      </HeaderStyles>

      <Outlet />
    </>
  );
}

export default Header;
