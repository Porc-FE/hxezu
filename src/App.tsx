import Header from "./components/common/header/Header";
import About from "./pages/About";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
      </main>
    </>
  );
}
