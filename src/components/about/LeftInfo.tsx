import styled from "@emotion/styled";
import profile from "../../assets/images/profile.jpg";
import { ArrowUpRight } from "lucide-react";

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
    box-sizing: border-box;
    border: none;
    color: white;
    cursor: pointer;
    width: auto;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }
`;

export default function LeftInfo() {
  return (
    <LeftInfoContainer>
      <img src={profile} alt="" />
      현혜주 2001.11
      <button>
        <span>Peer Review 보기</span>{" "}
        <ArrowUpRight size={16} strokeWidth={1.8} />
      </button>
    </LeftInfoContainer>
  );
}
