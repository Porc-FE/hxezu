import styled from "@emotion/styled";
import play from "../../../assets/images/icons/play.svg";

const OverviewRightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PlayBtn = styled.div`
  background-color: var(--popcon-bg);
  color: var(--popcon-primary);
  padding: 8px 20px;
  display: flex;
  gap: 8px;
  width: fit-content;
  align-items: center;
  border-radius: 32px;
  font-weight: 500;
`;

export default function OverviewRight() {
  return (
    <OverviewRightContainer>
      <h1>ROLE</h1>
      <PlayBtn>
        <img src={play} alt="" />
        DESIGN
      </PlayBtn>
      - 서비스 전반적인 디자인 총괄 및 반응형 웹 디자인 <br />
      - 직접 로고 디자인 수행함으로써 프로젝트의 브랜딩 기여 <br />
      - 디자인 시스템 설계 (색상, 타이포그래피, 버튼, 컴포넌트 등) <br />
      <PlayBtn>
        <img src={play} alt="" />
        FRONTEND
      </PlayBtn>
      HOME <br />
      - GSAP + ScrollTrigger 스크롤 애니메이션을 적용한 홈 랜딩 페이지 구현
      <br />
      COMMUNITY <br />
      - Devcourse API를 활용한 게시물 작성, 조회, 수정, 삭제 기능 구현
      <br />
      - Youtube API 연동을 통한 노래 재생 기능(상태관리를 통한 동시 재생 제어)
      <br />
      - Spotify API 를 활용한 숨듣명 노래 추가 기능 구현
      <br />
      - 게시물 검색 기능 및 상세 페이지 내 좋아요, 댓글, 알림 전송 기능 <br />
      - 페이지네이션 구현 <br />
      UI/UX <br />
      - 반응형 스타일링 및 Skeleton UI 적용을 통한 UX 개선
      <br />
      - 인터랙션 품질 향상을 위한 마이크로 애니메이션 도입
      <br />- 전반적인 디자인 QA 수행
    </OverviewRightContainer>
  );
}
