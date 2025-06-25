import styled from "@emotion/styled";
import Index from "../components/work/index/Index";
import FirstProject from "../components/work/first/FirstProject";

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
    </WorkContainter>
  );
}
