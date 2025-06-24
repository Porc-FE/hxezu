import styled from "@emotion/styled";
import profile from "../../assets/images/profile.jpg";

const LeftInfoContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 10rem;
  align-items: center;

  img {
    width: 300px;
  }

  button {
    background-color: var(--primary-300);
    padding: 0.7rem 1.5rem;
    border: none;
    color: white;
    cursor: pointer;
    width: auto;
    border-radius: 20px;
  }
`;

export default function LeftInfo() {
  return (
    <LeftInfoContainer>
      <img src={profile} alt="" />
      현혜주 2001.11
      <button>Peer Review 보기</button>
    </LeftInfoContainer>
  );
}
