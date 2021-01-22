import styled from "styled-components";

const StyledPage = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledStarshipCard = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  border: 1px solid #000;
  border-radius: 12px;
  height: 150px;
  width: 300px;
`;

export default function IndexPage(props) {
  return (
    <StyledPage>
      {props.allStarShips.map((starship) => (
        <StyledStarshipCard key={starship.name}>
          <h1>{starship.name}</h1>
        </StyledStarshipCard>
      ))}
    </StyledPage>
  );
}
