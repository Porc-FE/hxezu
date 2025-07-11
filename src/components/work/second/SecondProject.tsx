import styled from "@emotion/styled";
import SecondProjectThumbnail from "./SecondProjectThumbnail";
import SecondProjectOverview from "./SecondProjectOverview";
import SecondProjectTroubleShooting from "./SecondProjectTroubleShooting";

const SecondProjectContainer = styled.div`
  background-color: black;
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function SecondProject() {
  return (
    <SecondProjectContainer>
      <SecondProjectThumbnail />
      <SecondProjectOverview />
      <SecondProjectTroubleShooting />
    </SecondProjectContainer>
  );
}
