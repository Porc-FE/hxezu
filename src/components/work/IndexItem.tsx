import styled from "@emotion/styled";
import { ArrowUpRight } from "lucide-react";

const IndexItemContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  box-sizing: border-box;
  border-bottom: 0.2px solid white;

  span {
    width: 200px;
  }

  strong {
    font-size: 1.4rem;
  }

  .proj-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;
  }
`;

export default function IndexItem({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <IndexItemContainer>
      <span>{index}</span>
      <div className="proj-info">{children}</div>
      <ArrowUpRight strokeWidth={1} />
    </IndexItemContainer>
  );
}
