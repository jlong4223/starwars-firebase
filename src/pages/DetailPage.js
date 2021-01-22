import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledPage = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledStarshipCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 15px;
  margin: 15px;
  border: 1px solid #000000;
  border-radius: 12px;
  height: 350px;
  width: 450px;
  h1 {
    text-align: center;
  }

  section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    border: 1px solid #000000;
    border-radius: 7px;
    padding: 10px;
    max-width: 25%;
    text-align: center;
    margin: 0px 10px;
    &:hover {
      background-color: #000000;
      color: #ffffff;
    }
  }
`;

export default function Detail({ starship }) {
  return (
    <StyledPage>
      <StyledStarshipCard key={starship.name}>
        <h1>{starship.name}</h1>
        <p>
          <strong>Manufacturer:</strong> {starship.manufacturer}
        </p>
        <p>
          <strong>Passenger Capacity:</strong> {starship.passengers}
        </p>
        <p>
          <strong>Hyperdrive Rating:</strong> {starship.hyperdrive_rating}
        </p>
        <section>
          <Link to="/">Back Home</Link>
          <Link to="/starships">All Starships</Link>
        </section>
      </StyledStarshipCard>
    </StyledPage>
  );
}
