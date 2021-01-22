import styled from "styled-components";
import { Link } from "react-router-dom";

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
    li {
      margin-right: 15px;
    }
  }
`;

export default function Header(props) {
  return (
    <StyledHeader>
      <Link to="/">
        <h1>Starwarsify</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="">Login</Link>
          </li>
          <li>
            <Link to="">Logout</Link>
          </li>
          <li>
            <Link to="/starships">All Starships</Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}
