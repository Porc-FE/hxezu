import styled from "@emotion/styled";

const HomeContainer = styled.div`
  height: 100vh;
  padding: 80px;
  display: flex;
  align-items: flex-end;

  h1 {
    font-size: 20rem;
  }
`;

export default function Home() {
  return (
    <HomeContainer>
      <h1>Portfolio</h1>
    </HomeContainer>
  );
}
