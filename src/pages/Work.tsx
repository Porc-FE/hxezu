import styled from "@emotion/styled";
import Index from "../components/work/index/Index";
import FirstProject from "../components/work/first/FirstProject";
import SecondProject from "../components/work/second/SecondProject";

const WorkContainter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export default function Work() {
  return (
    <WorkContainter>
      <Index />
      <FirstProject />
      <SecondProject />
    </WorkContainter>
  );
}
