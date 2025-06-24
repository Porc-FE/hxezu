import LeftInfo from "./LeftInfo";
import RightInfo from "./RightInfo";
import styled from "@emotion/styled";

const InfoContainter = styled.div`
  display: flex;
  width: 100%;
`;

export default function MyInfo() {
  return (
    <InfoContainter>
      <LeftInfo />
      <RightInfo />
    </InfoContainter>
  );
}
