import styled from "@emotion/styled";
import Logo from "./Logo";
import MainNav from "./MainNav";

const Nav = styled.nav`
  width: 100vw;
  display: flex;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  align-items: center;
  height: auto;
  padding: 3rem 6rem 0rem 6rem;
  justify-content: space-between;
`;

export default function Header() {
  return (
    <>
      <Nav>
        <Logo />
        <MainNav />
      </Nav>
    </>
  );
}
