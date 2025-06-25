import styled from "@emotion/styled";

const Block = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  align-items: flex-start;
`;

const Label = styled.h3`
  width: 120px;
  font-weight: bold;
  text-align: left;
`;

const Detail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .hashtag {
    padding: 0.4rem 0.8rem;
    border: 1px black solid;
    border-radius: 20px;
    font-size: 0.8rem;
    white-space: nowrap;
  }

  .col-list {
    display: flex;
    gap: 1rem;
    text-align: left;
    flex-direction: column;
  }

  .row-list {
    display: flex;
    gap: 1rem;
  }

  .col-list li {
    display: flex;
    gap: 2rem;
  }

  li span {
    font-weight: 500;
    width: 80px;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

export default function InfoBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Block>
      <Label>{title}</Label>
      <Detail>{children}</Detail>
    </Block>
  );
}
