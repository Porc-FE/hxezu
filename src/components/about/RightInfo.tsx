import styled from "@emotion/styled";
import InfoBlock from "../common/MyInfoBlock";
import html from "../../assets/images/icons/html.svg";
import css from "../../assets/images/icons/css.svg";
import typescript from "../../assets/images/icons/typescript.svg";
import next from "../../assets/images/icons/next.svg";
import js from "../../assets/images/icons/javascript.svg";
import react from "../../assets/images/icons/react.svg";
import gsap from "../../assets/images/icons/gsap.svg";
import github from "../../assets/images/icons/github.svg";
import figma from "../../assets/images/icons/figma.svg";
import slack from "../../assets/images/icons/slack.svg";
import notion from "../../assets/images/icons/notion.svg";
import discord from "../../assets/images/icons/discord.svg";

const RightInfoContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 10rem 0;
  box-sizing: border-box;
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
          </li>
          <li>
            <div className="hashtag"># 열정적인</div>
          </li>
          <li>
            <div className="hashtag"># 아이디어 뱅크</div>
          </li>
        </ul>
      </InfoBlock>
      <InfoBlock title="SKILLS">
        <ul className="row-list">
          <li>
            <img src={html} alt="" />
          </li>
          <li>
            <img src={css} alt="" />
          </li>
          <li>
            <img src={typescript} alt="" />
          </li>
          <li>
            <img src={js} alt="" />
          </li>
          <li>
            <img src={react} alt="" />
          </li>
          <li>
            <img src={next} alt="" />
          </li>
          <li>
            <img src={gsap} alt="" />
          </li>
        </ul>
      </InfoBlock>
      <InfoBlock title="TOOLS">
        <ul className="row-list">
          <li>
            <img src={github} alt="" />
          </li>
          <li>
            <img src={figma} alt="" />
          </li>
          <li>
            <img src={slack} alt="" />
          </li>
          <li>
            <img src={notion} alt="" />
          </li>
          <li>
            <img src={discord} alt="" />
          </li>
        </ul>
      </InfoBlock>
    </RightInfoContainer>
  );
}
