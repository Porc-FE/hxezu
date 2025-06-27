import styled from "@emotion/styled";
import ProjectInfoBlock from "../../common/ProjectInfoBlock";
import upcoming from "../../../assets/images/projects/upcoming.png";

const FirstProjectThumbnailContainer = styled.div`
  display: flex;
  height: 100vh;
  margin: 0 auto;
  width: 85%;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  gap: 6rem;
`;

const ThumbnailLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  width: 60%;
  height: fit-content;
`;

const DescriptionWrapper = styled.div`
  font-size: 0.9rem;
  color: white;
  line-height: 2.2;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 1rem;

  h1 {
    font-family: "MonumentExtended";
    color: var(--popcon-primary);
    font-size: 3rem;
  }
  span {
    color: white;
  }

  p {
    font-weight: 300;
    color: white;
    margin: 0;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

const ThumbnailRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 60%;
  padding-top: 8rem;
  box-sizing: border-box;

  span {
    line-height: 2;
  }
`;

export default function FirstProjectThumbnail() {
  return (
    <FirstProjectThumbnailContainer>
      <ThumbnailLeftWrapper>
        <TitleWrapper>
          <h1>
            POP<span>con</span>.
          </h1>
          <p>해외 팝송 팬들을 위한 커뮤니티 기반 음악 플랫폼 </p>
        </TitleWrapper>

        <ImageContainer>
          <img src={upcoming} />
        </ImageContainer>
      </ThumbnailLeftWrapper>

      <ThumbnailRightWrapper>
        <span>
          알고리즘을 넘어 진짜 취향을 연결하는,
          <br /> 숨듣명(숨어서 듣는 명곡) 공유 기반 음악 큐레이션 플랫폼을
          기획·개발했습니다.
        </span>
        <ProjectInfoBlock
          type="Team Project"
          contr="Design 90%
FE Development 30 %"
          period="2025.04-05"
          device="반응형 (웹, 태블릿, 모바일)"
        />
        <DescriptionWrapper>
          <p>
            직접 숨듣명을 추천하거나, 콘서트 후기 및 음악 이야기를 자유롭게
            공유할 수 있습니다.
          </p>
          <p>
            사용자가 만든 플레이리스트를 분석하여 감성 맞춤형 음악을 추천받을 수
            있습니다.
          </p>
          <p>
            음악 검색과 재생 기능을 통해, 마음에 드는 노래를 나만의
            플레이리스트에 저장하고 감상할 수 있습니다.
          </p>
        </DescriptionWrapper>
      </ThumbnailRightWrapper>
    </FirstProjectThumbnailContainer>
  );
}
