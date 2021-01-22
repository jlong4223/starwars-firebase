import styled from "styled-components";

const StyledPage = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  section:first-child {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  section:last-of-type {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      margin: 0 10px;
      padding: 10px;
      background-color: #000;
      color: gold;
      border-radius: 12px;
    }
  }
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
      <section>
        {props.allStarShips.map((starship) => (
          <StyledStarshipCard key={starship.name}>
            <h1>{starship.name}</h1>
          </StyledStarshipCard>
        ))}
      </section>
      <section>
        <button onClick={() => props.getNextOrPrev(props.prev)}>
          Previous
        </button>
        <button onClick={() => props.getNextOrPrev(props.next)}>Next</button>
      </section>
    </StyledPage>
  );
}
