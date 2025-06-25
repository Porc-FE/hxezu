import styled from "@emotion/styled";
import IndexItem from "./IndexItem";

const IndexContainter = styled.div`
  height: 100vh;
  width: 100%;
  padding: 0 20rem;
  box-sizing: border-box;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default function Index() {
  return (
    <IndexContainter>
      <h1>CONTENTS</h1>
      <IndexItem index="01">
        <span>Web : Front-End, Design</span>
        <strong>POPcon.</strong>
        <p>프로그래머스 데브코스 2차 프로젝트 : </p>
      </IndexItem>
      <IndexItem index="02">
        <span>Web : Front-End, Design</span>
        <strong>COSMOS</strong>
        <p>프로그래머스 데브코스 3차 프로젝트 : </p>
      </IndexItem>
      <IndexItem index="03">
        <span>Web : Front-End, Design</span>
        <strong>Portfolio</strong>
        <p>개인 포트폴리오 사이트</p>
      </IndexItem>
    </IndexContainter>
  );
}
