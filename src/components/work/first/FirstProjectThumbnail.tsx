import styled from "@emotion/styled";
import ProjectInfoBlock from "../../common/ProjectInfoBlock";

const FirstProjectThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  h1 {
    font-family: "MonumentExtended";
    color: var(--popcon-primary);
  }
  span {
    color: white;
  }
`;

export default function FirstProjectThumbnail() {
  return (
    <FirstProjectThumbnailContainer>
      <h1>
        POP<span>con</span>.
      </h1>
      <ProjectInfoBlock
        type="Team Project"
        contr="Design 100%
FE Development 30 %"
        period="2025.04-05"
        device="반응형 (웹, 태블릿, 모바일)"
      />
    </FirstProjectThumbnailContainer>
  );
}
