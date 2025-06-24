import styled from "@emotion/styled";
import InfoBlock from "./InfoBlock";

const RightInfoContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 10rem 0;
  align-items: center;
`;

export default function RightInfo() {
  return (
    <RightInfoContainer>
      <InfoBlock title="CONTACTS">
        <ul className="col-list">
          <li>
            <span>Email</span>
            <p>hailey_apple@icloud.com</p>
          </li>
          <li>
            <span>Github</span>
            <p>https://github.com/hxezu</p>
          </li>
          <li>
            <span>Velog</span>
            <p>https://velog.io/@hxezu</p>
          </li>
          <li>
            <span>Phone</span>
            <p>+82 10-5058-1366</p>
          </li>
        </ul>
      </InfoBlock>

      <InfoBlock title="EDUCATION">
        <ul className="col-list">
          <li>
            <span>2020.02</span>
            <p>삼성여자고등학교 졸업</p>
          </li>
          <li>
            <span>2020.03</span>
            <p>건국대학교 컴퓨터공학부 입학</p>
          </li>
          <li>
            <span>2023.09</span>
            <p>Czech Technical University in Prague 교환학생</p>
          </li>
          <li>
            <span>2025.02</span>
            <p>Programmers Devcourse Front-End 4th</p>
          </li>
        </ul>
      </InfoBlock>
      <InfoBlock title="KEYWORDS">
        <ul className="row-list">
          <li>
            <div className="hashtag"># 감각적인</div>
            <div className="hashtag"># 열정적인</div>
            <div className="hashtag"># 아이디어 뱅크</div>
          </li>
        </ul>
      </InfoBlock>
      <InfoBlock title="SKILLS">skill</InfoBlock>
      <InfoBlock title="TOOLS">skill</InfoBlock>
    </RightInfoContainer>
  );
}
