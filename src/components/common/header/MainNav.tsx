import styled from "@emotion/styled";

export default function MainNav() {
  const Nav = styled.nav`
    display: flex;
    gap: 2rem;
    a {
      text-decoration: none;
      transition: color 0.3s ease;
      color: inherit;
      font-weight: 200;
    }
  `;
  return (
    <>
      <Nav>
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </Nav>
    </>
  );
}
