import styled from "@emotion/styled";
import Footer from "../components/common/Footer";

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContactContainer = styled.div`
  flex: 1;
  width: 100%;
  padding: 0 6rem;
  box-sizing: border-box;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    width: 100%;
  }

  h1 {
    font-weight: 600;
    font-size: 70px;
  }

  p {
    font-weight: 300;
    margin-top: 0.5rem;
  }
`;

export default function Contact() {
  return (
    <PageWrapper>
      <ContactContainer>
        <div>
          <h1>THANK YOU</h1>
          <h1>FOR YOUR TIME.</h1>
        </div>
        <div className="kor">
          <p>소중한 시간 내주셔서 감사합니다.</p>
          <p>현혜주였습니다.</p>
        </div>
      </ContactContainer>
      <Footer />
    </PageWrapper>
  );
}
