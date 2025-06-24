import styled from "@emotion/styled";
import Slogan from "../components/about/Slogan";
import MyInfo from "../components/about/MyInfo";

const AboutContainer = styled.div`
  width: 100vw;
  padding: 10rem 0 10rem 0;
  background-color: white;
  color: var(--gray-400);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 10rem;
  strong {
    color: var(--primary-300);
  }
`;

export default function About() {
  return (
    <AboutContainer>
      <Slogan />
      <MyInfo />
    </AboutContainer>
  );
}
