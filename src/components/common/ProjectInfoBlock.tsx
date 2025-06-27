import styled from "@emotion/styled";

const ProjectInfoBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  font-size: 0.8rem;
`;

const ProjectInfoItem = styled.div`
  display: flex;
  p {
    font-weight: 200;
  }
`;

const Label = styled.h3`
  width: 180px;
  font-weight: 500;
  text-align: left;
`;

export default function ProjectInfoBlock({
  type,
  contr,
  period,
  device,
}: {
  type: string;
  contr: string;
  period: string;
  device: string;
}) {
  return (
    <ProjectInfoBlockContainer>
      <ProjectInfoItem>
        <Label>TYPE</Label>
        <p>{type}</p>
      </ProjectInfoItem>
      <ProjectInfoItem>
        <Label>CONTRIBUTION</Label>
        <p>{contr}</p>
      </ProjectInfoItem>
      <ProjectInfoItem>
        <Label>PERIOD</Label>
        <p>{period}</p>
      </ProjectInfoItem>
      <ProjectInfoItem>
        <Label>DEVICE</Label>
        <p>{device}</p>
      </ProjectInfoItem>
    </ProjectInfoBlockContainer>
  );
}
