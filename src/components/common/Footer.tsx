import styled from "@emotion/styled";

const FooterContainer = styled.div`
  width: 100vw;
  padding: 3rem 6rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <address>
        <a href="mailto:hailey_apple@icloud.com">hailey_apple@icloud.com</a>
      </address>
      <p>© Copyright 2025. hyejuhyun all rights reserved.</p>
      <p>portfolio</p>
    </FooterContainer>
  );
}
