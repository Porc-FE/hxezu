import styled from "@emotion/styled";

export default function Logo() {
  const Logo = styled.div`
    font-weight: 200;
    span {
      font-weight: 500;
    }
  `;
  return (
    <>
      <Logo>
        <span className="font-bold">HYEJU</span> HYUN
      </Logo>
    </>
  );
}
