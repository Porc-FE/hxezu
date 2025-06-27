import styled from "@emotion/styled";
import OverviewLeft from "./OverviewLeft";
import OverviewRight from "./OverviewRight";

const FirstProjectOverviewContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--popcon-primary);
  color: var(--popcon-bg);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function FirstProjectOverview() {
  return (
    <FirstProjectOverviewContainer>
      <OverviewLeft />
      <OverviewRight />
    </FirstProjectOverviewContainer>
  );
}
