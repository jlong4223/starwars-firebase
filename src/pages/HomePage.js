import styled from "styled-components";

const StyledPage = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function HomePage(props) {
  return (
    <StyledPage>
      <h1>HomePage</h1>
    </StyledPage>
  );
}
