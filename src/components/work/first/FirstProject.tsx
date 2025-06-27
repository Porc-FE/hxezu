import styled from "@emotion/styled";
import FirstProjectThumbnail from "./FirstProjectThumbnail";
import FirstProjectOverview from "./FirstProjectOverview";
import FirstProjectTroubleShooting from "./FirstProjectTroubleShooting";

const FirstProjectContainer = styled.div`
  background-color: black;
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export default function FirstProject() {
  return (
    <FirstProjectContainer>
      <FirstProjectThumbnail />
      <FirstProjectOverview />
      <FirstProjectTroubleShooting />
    </FirstProjectContainer>
  );
}
