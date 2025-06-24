import styled from "@emotion/styled";
import Header from "./components/common/header/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Work from "./pages/Work";

const MainContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

export default function App() {
  return (
    <>
      <Header />
      <MainContainer>
        <Home />
        <About />
        <Work />
      </MainContainer>
    </>
  );
}
