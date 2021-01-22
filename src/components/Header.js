import styled from "styled-components";
import { Link } from "react-router-dom";
import { login, logout } from "../services/firebase";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  background-color: #000;
  color: #ffd700;
  box-shadow: 1px 1px 5px 3px #808080;

  ul {
    display: flex;
    list-style: none;
    align-items: center;
    li {
      margin-right: 15px;
    }
  }
`;

const StyledAvatar = styled.img`
  border-radius: 50%;
  height: 35px;
`;

export default function Header(props) {
  function handleLogin(e) {
    e.preventDefault();
    login();
  }

  function handleLogout(e) {
    e.preventDefault();
    logout();
  }

  return (
    <StyledHeader>
      <Link to="/">
        <h1>Starwarsify</h1>
      </Link>
      <nav>
        {/* were using a ternary to show user name and img if someone is logged in */}
        <ul>
          {props.user ? (
            <>
              <li>Welcome, {props.user.displayName}</li>
              <li>
                <StyledAvatar
                  src={props.user.photoURL}
                  alt={props.user.displayName}
                />
              </li>
              <li>
                <Link to="" onClick={handleLogout}>
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="" onClick={handleLogin}>
                Google Login
              </Link>
            </li>
          )}
          <li>
            <Link to="/starships">All Starships</Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}
