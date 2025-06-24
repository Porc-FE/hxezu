import styled from "@emotion/styled";

const SloganContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 2rem;
  strong {
    color: var(--primary-300);
  }
`;

export default function Slogan() {
  return (
    <SloganContainer>
      <p>
        <strong>무한한 성장의 잠재력</strong>을 가진 프론트엔드 개발자{" "}
        <span>현혜주</span>입니다.
      </p>
      <div>
        <p>사용자의 시선에서 문제를 정의하고,</p>
        <p>감각적이면서도 일관된 경험을 설계하여 구현하겠습니다.</p>
      </div>
    </SloganContainer>
  );
}
