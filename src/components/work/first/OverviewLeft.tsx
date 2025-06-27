import styled from "@emotion/styled";
import screenshot from "../../../assets/images/projects/bops.png";

const OverviewLeftContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 70%;
  background-color: var(--popcon-bg);
  color: white;
  border-radius: 5%;

  img {
    width: 80%;
  }
`;

export default function OverviewLeft() {
  return (
    <OverviewLeftContainer>
      <ImageBox>
        <img src={screenshot} />
      </ImageBox>
    </OverviewLeftContainer>
  );
}
