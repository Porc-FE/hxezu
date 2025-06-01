import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  background-color: hotpink;
  color: white;
  border: none;
  padding: 8px 16px;

  &:hover {
    background-color: deeppink;
  }
`;

export default function Home() {
  return <Button>Click Me</Button>;
}
