import styled from "@emotion/styled";
import FirstProjectThumbnail from "./FirstProjectThumbnail";

const FirstProjectContainer = styled.div`
  background-color: var(--popcon-bg);
  width: 100%;
  min-height: 100vh;
  padding: 0 10rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function FirstProject() {
  return (
    <FirstProjectContainer>
      <FirstProjectThumbnail />
    </FirstProjectContainer>
  );
}
