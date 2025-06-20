import styled from "@emotion/styled";

const HomeContainer = styled.div`
  height: 100vh;
  padding: 80px 80px 0px 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  .contentWrapper {
    display: flex;
    flex-direction: column;
    width: fit-content;
    gap: 2rem;
  }

  h1 {
    font-size: 25rem;
  }

  .info {
    width: 100%;
    padding: 0 20px 0 20px;
    display: flex;
    justify-content: space-between;
    font-weight: 200;
  }

  .info span {
    font-weight: 500;
  }
`;

export default function Home() {
  return (
    <HomeContainer>
      <div className="contentWrapper">
        <div className="info">
          <p>
            <span>FRONTEND</span> DEVELOPER
          </p>
          <p>© 2025</p>
        </div>
        <h1>Portfolio</h1>
      </div>
    </HomeContainer>
  );
}
